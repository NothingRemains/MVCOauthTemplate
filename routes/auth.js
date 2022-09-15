const express = require('express')
const router = express.Router()
const passport = require('passport')
const authController = require('../controllers/auth')

// @ desc   Google Authentication
// @ route  GET /auth/google
router.get('/google', authController.authUser)

// @ desc   Google Authentication Callback
// @ route  GET /auth/google/callback
router.get('/google/callback', authController.authCallback)

// @ desc   Logout
// @ route  /auth/logout
router.get('/logout', authController.userLogout)

module.exports = router