module.exports = function (req, res) {  
    logger.trace("method=get.iot")        
    kafka.send('1', 'result', process.env.salesforce_topic_work_status_change)
    res.send({ 
        iot: [
            {iot: 2}
        ], 
        result: 'result'
    })
}