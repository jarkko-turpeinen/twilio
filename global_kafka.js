const kafka = require('kafka-node')
const Producer = kafka.Producer
const client = new kafka.Client()
const producer = new Producer(client)

global.kafka = {
    send: (key, message, topic) => {
        logger.trace("method=global.kafka.send")
        producer.send([
            {
                topic: topic,
                key: key,
                messages: [message]
            }
        ], (error, data) => { 
            error !== null 
                ? logger.error("error=global.kafka.error: " + error) 
                : logger.trace("info=global.kafka.data: " + JSON.stringify(data))
        })
    }
}

producer.on('error', (error) => {
    logger.error('error=global.kafka.error: ' + error)
})

producer.on('ready', () => {
    logger.trace('info=global.kafka.ready')
})