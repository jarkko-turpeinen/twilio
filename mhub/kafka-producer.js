/**
 * Generic kafka producer
 */
const kafka = require('kafka-node')
const producer = new kafka.Producer(new kafka.Client())

/**
 * Sends message to kafka topic
 * 
 * @param {string} topic 
 * @param {string} key 
 * @param {string} message
 */
const send = (topic, key, message) => {    
    logger.trace("method=kafka.producer.send topic=" + topic + " key=" + key + " message=" + message)
    producer.send([
        {
            topic: topic,
            key: key,
            messages: [message]
        }
    ], (error, data) => { 
        error !== null 
            ? logger.error("error=kafka.producer.error: " + error) 
            : logger.trace("info=kafka.producer.data: " + JSON.stringify(data))
    })
}


producer.on('error', (error) => {
    logger.error('error=kafka.producer.error: ' + error)
})

producer.on('ready', () => {
    logger.trace('info=kafka.producer.ready')
})

module.exports.send = send