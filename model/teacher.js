const mongoose = require('mongoose')

const teacherSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: false
  },
  bio: {
    type: String,
    required: false
  }
})

module.exports = mongoose.model('teacher', teacherSchema)
