const router = require('express').Router()
const Teacher = require('../model/teacher')

router.get('/', (req, res) => {
  Teacher.find({ }, (err, teachers) => {
    if(err) return res.status(400).send(err)

    res.send(teachers)
  })
})

router.post('/add', (req, res) => {
  const { name, email, avatar, bio } = { ...req.body }
  
  if(!name || !email) return res.status(400).send('Nome e e-mail são obrigatórios')

  const teacher = new Teacher({
    name,
    email,
    avatar,
    bio
  })

  teacher.save()
             .catch(err => res.status(400).send(err))
             .then(resul => res.send({ teacher: resul._id }))
})

module.exports = router
