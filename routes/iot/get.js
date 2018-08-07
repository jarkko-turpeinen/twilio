module.exports = (req, res) => {  
    logger.trace("method=/iot/get")    
    mhub.sendWorkStatusChange('1', 'method=get.iot')
    res.status(200).json({ 
        iot: [
            {iot: 2}
        ], 
        result: 'result'
    })
}