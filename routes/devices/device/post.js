module.exports = function (req, res) {  
    res.send(
        JSON.stringify(
            {
                result: "post was a success"
            }, null, 3)
    )
}