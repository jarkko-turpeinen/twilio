var router = require('express').Router();  
router.get('/:id', require('./get'));
router.post('/', require('./post'));  
router.delete('/:id', require('./delete'));  
module.exports = router;