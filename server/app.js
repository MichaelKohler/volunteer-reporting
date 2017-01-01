const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

const config = require('./config');
const Models = require('./models/models');
const index = require('./routes/index');
const reports = require('./routes/reports');

const DB_NAME = 'volunteer-reporting';

const app = express();

mongoose.connect('mongodb://localhost/' + DB_NAME);
Models.init();

const strategy = new Auth0Strategy({
  domain: config.auth.AUTH0_DOMAIN,
  clientID: config.auth.AUTH0_CLIENT_ID,
  clientSecret: config.auth.AUTH0_CLIENT_SECRET,
  callbackURL: config.auth.CALLBACK_URL
}, (accessToken, refreshToken, extraParams, profile, done) => {
  return done(null, profile);
});

passport.use(strategy);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: config.session.secret,
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', index);
app.use('/reports', reports);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({ status: err.status, message: err.message });
});

module.exports = app;
