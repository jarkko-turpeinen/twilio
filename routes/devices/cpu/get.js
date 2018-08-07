module.exports = (req, res) => {  
    logger.trace("method=/devices/:id/cpu/get device=" + req.params.id)
    let result = "req.db.select()"
    res.send({
        device: req.params.id,
        result: result
    })
}