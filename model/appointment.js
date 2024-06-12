const mongoose = require('mongoose')

const appointmentSchema = mongoose.Schema ({
  hour: {
    type: Number,
    required: true
  },
  day: {
    type: Number,
    required: true
  },
  studentName: {
    type: String,
    required: true
  },
  studentPhone: {
    type: String,
    required: true
  },
  classId: {
    type: Number,
    required: true
  },
  teacherId: {
    type: Number,
    required: true
  },
})

module.exports = mongoose.model('appointment', appointmentSchema)
