module.exports = (req, res) => { 
    logger.trace("method=/devices/:id/cpu/post device=" + req.params.id)
    let result = req.db.merge()
    res.send({
        device: req.params.id,
        result: result
    })
}