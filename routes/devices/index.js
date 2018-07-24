var router = require('express').Router();  
router.get('/', require('./get'));  
router.use('/:id',require('./device/index'))
module.exports = router;