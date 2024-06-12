const router = require('express').Router()
const Appointment = require('../model/appointment')

router.get('/', (req, res) => {
  Appointment.find({ }, (err, appointments) => {
    if(err) return res.status(400).send(err)

    res.send(appointments)
  })
})

router.post('/add', (req, res) => {
  const { hour, day, studentName, studentPhone, teacherId, classId } = { ...req.body }
  
  if(!hour || !day || !studentName || !studentPhone || !teacherId || !classId) return res.status(400).send('Complete todos os campos para fazer o agendamento')

  const appointment = new Appointment({
    hour,
    day,
    studentName,
    studentPhone,
    teacherId,
    classId
  })

  appointment.save()
             .catch(err => res.status(400).send(err))
             .then(resul => res.send({ appointment: resul._id }))
})

module.exports = router
