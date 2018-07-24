var router = require('express').Router();  
router.get('/', require('./get.js'));  
router.get('/device/:id', require('./device/get'));
router.post('/device', require('./device/post'));  
router.delete('/device/:id', require('./device/delete'));  
module.exports = router;