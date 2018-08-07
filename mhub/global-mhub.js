const producer = require('./kafka-producer')

/**
 * Application specific global message hub topic implementations
 */
global.mhub = {
    /**
     * Example
     */
    sendWorkStatusChange: (key, message) => {
        logger.trace("method=mhub.send_work_status_change key=" + key + " message=" + message)
        producer.send(process.env.salesforce_topic_work_status_change, key, message)
    }
}
