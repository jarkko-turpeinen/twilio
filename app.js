const express = require('express')
const app = express()
const port = process.env.SERVER_PORT || 8080
/**
 * Routes are organised by directories. Root path / base directory is /routes.
 * Each directory's index.js defines routes below that route.
 * Add needed http method files [get.js, post.js, put.js, delete.js, ...] and
 * implement logic in those method files per directory aka path.
 */
app.use('/', require('./routes'))
app.on('error', (error) => console.error("error=app.error: " + error))
app.listen(port, () => console.info('info=Serving http on port ' + port))