const Strategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('../models/User')
const secretKey = require('./keys').secret

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = secretKey

module.exports = passport => {
    passport.use(
        new Strategy(opts, (jwt_payload, done) => {
            User.findById(jwt_payload._id).then( user => {
                if(user) return done(null, user)
                return done(null, false)
            }).catch( err => {
                console.log(err)
            })
        })
    )
}
