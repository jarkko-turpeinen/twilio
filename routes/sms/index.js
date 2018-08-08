const routes = require('express').Router()
routes.post('/', require('./post'))
module.exports = routes
