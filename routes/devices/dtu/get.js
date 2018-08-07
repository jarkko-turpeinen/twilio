module.exports = (req, res) => {  
    logger.trace("method=/devices/:id/dtu/get device=" + req.params.id)
    let result = "req.db.select()"
    res.send({
        device: req.params.id,
        result: result
    })
}