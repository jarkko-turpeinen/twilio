module.exports = function (req, res) {  
    req.logger.debug("get.device")
    res.send(
        JSON.stringify(
            {
                device: 1,
                result: "success"
            }, null, 3)
    )
}