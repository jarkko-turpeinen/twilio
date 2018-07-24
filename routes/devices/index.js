var router = require('express').Router();  
router.get('/', require('./get'));  
router.get('/dtu/:id',require('./dtu/index'))
router.get('/cpu/:id',require('./cpu/index'))
module.exports = router;