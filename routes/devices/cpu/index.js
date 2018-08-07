const routes = require('express').Router({ mergeParams: true })
routes.get('/', require('./get'))
routes.post('/', require('./post'))
routes.delete('/', require('./delete'))
module.exports = routes