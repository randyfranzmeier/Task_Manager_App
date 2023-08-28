const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

const callDB = require('../MongoDB/db')
const express = require('express')
const app = express()
app.use(express.static('./src'))
const port = process.env.PORT || 3000
//if(process.env.NODE_ENV !== 'production')  { //only show private var if not in production mode
//}

//start the server if database is connected correctly
const start = async () => {
try {
    const uri = process.env.MONGO_URI
    await callDB(uri)
    app.listen(port, () =>
    { console.log('server listening on port ' + JSON.stringify(port))})
}
catch (err){
    console.error(err)
}
} 

start()



