module.exports = function (req, res) {  
    req.logger.trace("method=delete.cpu device=" + req.params.id)
    let result = req.db.delete()    
    res.send({
        device: req.params.id,
        result: result
    })
}