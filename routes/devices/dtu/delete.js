module.exports = function (req, res) {  
    logger.trace("method=delete.dtu device=" + req.params.id)
    let result = req.db.delete()    
    res.send({
        device: req.params.id,
        result: result
    })
}