const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

//Converts json data to raw data
app.use(express.json())

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))

//router imports
const runPython = require('./routes/PythonCodeRoutes')

//use routes
app.use('/api/v1',runPython.router)

module.exports = app