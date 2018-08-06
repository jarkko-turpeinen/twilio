var router = require('express').Router()
router.get('/dtu/:id', require('./get'))
router.post('/dtu/', require('./post'))
router.delete('/dtu/:id', require('./delete'))
module.exports = router