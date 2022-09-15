const passport = require('passport')

module.exports = {
    authUser: (req, res, next) => {
        passport.authenticate('google', { scope: ['profile'] })(req,res,next)
    },
    authCallback: (req, res, next) => {
        passport.authenticate('google', { 
            successRedirect: '/loggedIn', 
            failureRedirect: '/' })(req,res,next)
    },
    userLogout: (req, res) => {
        req.logout( (err) => {
            if (err) { return next(err); }
            res.redirect('/')
        })    
    },
    ensureAuth: function (req, res, next) {
        if (req.isAuthenticated()) {
            return next()
        } else {
            res.redirect('/')
        }
    },
    ensureGuest: function (req, res, next) {
        if(req.isAuthenticated()) {
            res.redirect('/loggedIn')
        } else {
            return next()
        }
    }
}