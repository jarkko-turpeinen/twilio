module.exports = function (req, res) {  
    res.send(
        JSON.stringify(
            {
                result: "delete was a success"
            }, null, 3)
    )
}