const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

class Models {
  static init() {
    const Report = new Schema({
      date: { type: Date, default: Date.now },
      title: { type: String, default: '' },
      description: { type: String, default: '' }
    });

    mongoose.model('Report', Report);
  }
}

module.exports = Models;
