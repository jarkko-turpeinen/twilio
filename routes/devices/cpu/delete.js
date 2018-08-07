module.exports = (req, res) => {  
    logger.trace("method=/devices/:id/cpu/delete device=" + req.params.id)
    let result = req.db.delete()    
    res.send({
        device: req.params.id,
        result: result
    })
}