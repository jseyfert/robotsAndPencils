var express = require('express')
var cors = require('cors')

var getLaunches = require('./controler/launch')
var connectDB = require('./utilities/database')
require('dotenv').config()
 
let app = express()
let port = 3000

connectDB()

app.use(cors())

app.get('/getLaunches', getLaunches)

app.listen(port, ()=>{
    console.log(`listening on http://localhost:${port}/getLaunches`);
})