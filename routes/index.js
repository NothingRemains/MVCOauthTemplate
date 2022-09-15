const { request } = require('express')
const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')

// @ desc   Login/Landing Page
// @ route  GET /
router.get('/', authController.ensureGuest, (req, res) => {
    res.render('login.ejs')
})

// @ desc   Logged in page
// @ route  GET /loggedIn
router.get('/loggedIn', authController.ensureAuth, async (req, res) => {
    try {
        res.render('loggedIn.ejs', {
            name: req.user.firstName || 'Logged Out User'
        })
    } catch (err) {
        console.error(err)
    }
})

module.exports = router