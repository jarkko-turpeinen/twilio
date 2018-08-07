module.exports = (req, res) => {  
    logger.trace("method=/devices/get")
    let result = "req.db.select()"
    res.send({ 
        devices: [
            {device: 2}
        ], 
        result: result
    })
}