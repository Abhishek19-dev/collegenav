const express = require('express')
const { RunPythonCode } = require('../controllers/PythonCodeController')

const router = express.Router()

router.get('/run',RunPythonCode)
// router.post('/run',RunPythonCode)

exports.router = router