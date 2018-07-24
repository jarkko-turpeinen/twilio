module.exports = function (req, res) {  
    req.logger.debug("get.devices")
    res.send({ 
        devices: [
            {device: 2}
        ], 
        result: "success"
    })
}