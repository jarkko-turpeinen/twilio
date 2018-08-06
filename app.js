require('dotenv/config')
require('./global_logger')
require('./global_kafka')

const express = require('express')
const app = express()

app.use('/devices', require('./routes/devices'))
app.use('/iot', require('./routes/iot'))

app.on('error', (error) => logger.error("error=app.error: " + error))

app.listen(process.env.port, () => logger.info('info=Serving http on port ' + process.env.port ))