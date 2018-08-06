module.exports = function (req, res) {  
    logger.trace("method=get.dtu device=" + req.params.id)
    let result = "req.db.select()"
    res.send({
        device: req.params.id,
        result: result
    })
}