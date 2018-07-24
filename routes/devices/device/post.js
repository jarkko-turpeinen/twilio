module.exports = function (req, res) { 
    req.logger.debug("post.device")
    // TODO your stuff
    let result = req.db.merge()
    res.send({
        devices: [
            {device: 2}
        ],
        result: result
    })
}