const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'event name is required'],
  },
  description: {
    type: String,
    required: [true, 'event description is required'],
  },
  startDate: Date,
  endDate: Date,
  location: String,
  noticeType: {
    type: String,
    enum: ['Non Academic Event', 'Academic Event'],
    default: 'Non Academic Event',
  },
  coverPhoto: String,
});

const model = mongoose.model('event', schema);

module.exports = model;
