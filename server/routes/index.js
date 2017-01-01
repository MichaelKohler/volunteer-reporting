const express = require('express');
const passport = require('passport');
const config = require('../config');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({test: 0});
});

router.get('/authCallback',
  passport.authenticate('auth0', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect(req.session.returnTo || config.auth.RETURN_AFTER_LOGIN_URL);
  });

router.get('/login', (req, res, next) => {
  res.status(302);
  res.header('Location', config.auth.CLIENT_LOGIN_URL);
  res.end();
});

router.get('/logout', (req, res, next) => {
  const url = config.auth.AUTH0_DOMAIN + '/v2/logout?returnTo=' +
    encodeURIComponent(config.auth.RETURN_AFTER_LOGOUT_URL);
  res.status(302);
  res.header('Location', url);
  res.end();
});

module.exports = router;
