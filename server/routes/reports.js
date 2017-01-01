const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

router.get('/', (req, res, next) => {
  const Report = mongoose.model('Report');
  Report.find({}, (err, docs) => {
    res.json(docs);
  });
});

module.exports = router;
