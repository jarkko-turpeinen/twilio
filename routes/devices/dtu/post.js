module.exports = function (req, res) { 
    logger.trace("method=post.dtu device=" + req.params.id)
    let result = req.db.merge()
    res.send({
        device: req.params.id,
        result: result
    })
}