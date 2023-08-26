const NotFound = (req, res) =>{
    res.status(404).send('Path is not valid')
}
module.exports = NotFound