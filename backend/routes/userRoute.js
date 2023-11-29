const express = require('express')
const { registerUser, LoginUser, LogoutUser } = require('../controllers/userController')


const router = express.Router()

router.post('/register',registerUser)
router.post('/login',LoginUser)
router.get('/logout',LogoutUser)


exports.router = router