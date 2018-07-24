module.exports = function (req, res) {  
    req.debug("delete.device")
    res.send(
        JSON.stringify(
            {
                result: "delete was a success"
            }, null, 3)
    )
}