const router = require('express').Router()
const DanceClass = require('../model/danceClass')

router.get('/', (req, res) => {
  DanceClass.find({ }, (err, danceClasses) => {
    if(err) return res.status(400).send(err)

    res.send(danceClasses)
  })
})

router.post('/add', (req, res) => {
  const { name, totalStudents, time, status, teacherId } = { ...req.body }
  
  if(!name || !totalStudents || !time || !status || !teacherId || !teacherId) return res.status(400).send('Complete todos os campos para cadastrar a turma')

  const danceClass = new DanceClass({
    name,
    totalStudents,
    time,
    status,
    teacherId
  })

  danceClass.save()
             .catch(err => res.status(400).send(err))
             .then(resul => res.send({ danceClass: resul._id }))
})

module.exports = router
