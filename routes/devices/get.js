module.exports = function (req, res) {  
    req.logger.trace("method=get.devices")
    let result = req.db.select()
    res.send({ 
        devices: [
            {device: 2}
        ], 
        result: result
    })
}