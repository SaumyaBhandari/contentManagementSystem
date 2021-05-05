const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: {
    type: String,
    default: 'gallery',
  },
  images: {
    type: [String],
  },
});

const model = mongoose.model('gallery', schema);

module.exports = model;
