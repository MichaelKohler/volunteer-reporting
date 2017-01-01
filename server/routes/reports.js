const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

router.get('/', (req, res, next) => {
  const Report = mongoose.model('Report');
  Report.find({}, (err, docs) => {
    res.json(docs);
  });
});

router.post('/', (req, res, next) => {
  const Report = mongoose.model('Report');

  let newReport = new Report();
  newReport.date = req.body.date || new Date();
  newReport.title = req.body.title;
  newReport.description = req.body.description;
  newReport.save();

  res.json(newReport);
});

module.exports = router;
