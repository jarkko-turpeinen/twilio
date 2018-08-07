module.exports = (req, res) => {  
    logger.trace("method=/get")    
    mhub.sendWorkStatusChange('1', 'method=get')
    res.send({ 
        result: 'result'
    })
}