const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, 'course name is required'],
  },
  courseID: String,
  tag: String,
  description: String,
  entryRequirement: String,
  year1: String,

  year2: String,
  year3: String,
  publishStatus: {
    type: Boolean,
    default: false,
  },
});
const model = mongoose.model('Course', schema);

module.exports = model;
