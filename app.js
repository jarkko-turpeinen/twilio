// Load environment variables from .env file for development environment
require('dotenv/config')

// Global logger object for app logic use
require('./logger')

// Global mhub object for app logic use
require('./mhub')

const express = require('express')
const app = express()

/**
 * Routes are organised by directories. Root path / base directory is /routes.
 * Each directory's index.js defines routes below that route.
 * Add needed http method files [get.js, post.js, put.js, delete.js, ...] and
 * implement logic in those method files per directory aka path.
 */
app.use('/', require('./routes'))
app.on('error', (error) => logger.error("error=app.error: " + error))
app.listen(process.env.server_port, () => logger.info('info=Serving http on port ' + process.env.port ))