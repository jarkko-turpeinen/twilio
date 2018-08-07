const routes = require('express').Router()
routes.get('/', require('./get'))
routes.use('/devices', require('./devices'))
routes.use('/iot', require('./iot'))
module.exports = routes