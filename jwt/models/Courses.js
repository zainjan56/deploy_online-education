const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { 
    type: String,
    required: true
  },
  instructor: {
    type: String,
    required: true
    },
  topics: {
    type: [String],
    required: true
    },
    description: {
      type: String,
      required: true
    },
  imagePath: {
    type: String,
    required: true
    },
});

module.exports = mongoose.model('Course', courseSchema);