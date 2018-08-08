const routes = require('express').Router()
routes.use('/sms', require('./sms'))
module.exports = routes