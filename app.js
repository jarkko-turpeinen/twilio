require('dotenv/config')
const express = require('express')
const app = express()
const locale = 'fi-FI'
const cloudant = require('./db').cloudant
const logger = {
    info: (text) => {console.log(new Date(), "level=INFO", text)},
    debug: (text) => {console.log(new Date(), "level=DEBUG", text)},
    warn: (text) => {console.log(new Date(), "level=WARN", text)},
    error: (text) => {console.log(new Date(), "level=ERROR", text)},
    fatal: (text) => {console.log(new Date(), "level=FATAL", text)},
    trace: (text) => {console.log(new Date(), "level=TRACE", text)},
}

/**
 * Application Middleware: Cloudant db object passed in request object to be used in route objects
 */
cloudant.connect(JSON.parse(process.env.VCAP_SERVICES))
app.use((req, res, next) => {
    req.db = cloudant
    next()
})

/**
 * Application Middleware: Logger object passed in request object to be used in route objects
 */
app.use((req, res, next) => {
    req.logger = logger    
    next()
})

/**
 * Device endpoints
 */
app.use('/devices', require('./routes/devices/index'))

app.listen(process.env.port, () => console.log('Serving Express on port ', process.env.port))