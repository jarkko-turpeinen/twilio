require('dotenv').config
const express = require('express')
const app = express()

app.use('/devices', require('./routes/devices/index'))

const port = process.env.PORT || 8080
app.listen(port, () => console.log('Magig happens on port ' + port))