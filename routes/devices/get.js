module.exports = function (req, res) {  
    res.send(
        JSON.stringify(
            {
                devices: [ {device: 1}],
                result: "success"
            }, null, 3)
    )
}