module.exports = (req, res) => {    
    console.log("method=/sms/post");    
    let payload = ""
    req.on('data', (data) => {
        payload += data.toString()}        
    )
    req.on('end', () => {
        payload = JSON.parse(payload)
        const client = require('twilio')(payload.sid, payload.token)
        let sms = {body: payload.message, from: payload.from, to: payload.to}
        client.messages.create(sms).then((response) => {
            console.log("OK")
            res.status(200).json({response: "OK"})
        }).catch((error) => console.error(error))
    })
}