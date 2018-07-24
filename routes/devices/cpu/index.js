var router = require('express').Router();  
router.get('/cpu/:id', require('./get'));
router.post('/cpu/', require('./post'));  
router.delete('/cpu/:id', require('./delete'));  
module.exports = router;