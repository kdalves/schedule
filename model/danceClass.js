const mongoose = require('mongoose')

const danceClassSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  totalStudents: {
    type: Number,
    required: true
  },
  time: {
    type: Number,
    required: true
  },
  status: {
    type: Number,
    required: true
  },
  teacherId: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('danceClass', danceClassSchema)
