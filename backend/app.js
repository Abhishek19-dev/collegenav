const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser') //for postman to take something from body

const app = express()

//Converts json data to raw data
app.use(express.json())

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))

//router imports
const runPython = require('./routes/PythonCodeRoutes')
const userRoute = require('./routes/userRoute')

//use routes
app.use('/api/v1',runPython.router)
app.use('/api/v1',userRoute.router)

module.exports = app