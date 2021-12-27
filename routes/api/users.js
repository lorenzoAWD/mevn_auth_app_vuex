// const express = require('express')
const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secretKey = require('../../config/keys').secret
const passport = require('passport')
const User = require('../../models/User')

/**
 * @route POST api/users/register
 * @desc Register user
 * @access Public
 */
router.post('/register', (req,res) => {
    // let name = req.body.name
    // let username = req.body.username
    // let email = req.body.email
    // let password = req.body.password
    // let confirm_password = req.confirm_password
    let {name, username, email, password, confirm_password } = req.body
    if(password !== confirm_password){
        return res.status(400).json({
            msg: "Password do not match.",
            status: 'wrong password'
        })
    }
    else{
        User.findOne({username: username}).then(user => {
            if(user){
                return res.status(400).json({
                    msg: `Username ${username} is already registered`,
                    status: 'username exists'
                })
            }
        })
        User.findOne({email:email}).then( user => {
            if(user){
                return res.status(400).json({
                    msg:`Email ${email} is already taken`,
                    status: 'email exists'
                })
            }
        })
        //!Qua si potrebbe aggiungere il controllo della validità dell'email
        //Data are valid - Register user
        let newUser = new User({
            name,
            username,
            password,
            email
        })
        // Hash password
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if(err) throw err
                newUser.password = hash
                newUser.save().then( user => {
                    return res.status(201).json({
                        success: true,
                        msg: `Hurry! User is now registered`,
                        status: 'registration success'
                    })
                })
            })
        })
    }
})

/**
 * @route /api/users/login
 * @desc Login user
 * @access Public
 */
router.post('/login', (req, res) => {
    // let username = req.body.username
    // let password = req.body.password
    let {
        username,
        password
    } = req.body
    User.findOne({username: username}).then( user => {
        //User not exists
        if(!user){
            return res.status(404).json({
                msg: `User ${username} is not found`,
                success: false,
                status: 'username not found'
            })
        }
        // if(password !== user.pass)
        bcrypt.compare(password, user.password).then( isMatch => {
            if(!isMatch){
                return res.status(400).json({
                    msg:`Wrong password`,
                    status: 'wrong password',
                    success: false
                })
            }
            //Login corretto
            else{
                let payload = {
                    _id: user._id,
                    username: user.username,
                    email: user.email,
                    name: user.name
                }
                jwt.sign(payload, secretKey, {expiresIn:604800}, (err, token) => {
                    return res.status(200).json({
                        msg:`Welcome back ${username}`,
                        success: true,
                        status: 'logged in',
                        user: user,
                        token: `Bearer ${token}`
                    })
                })

            }
        })
    })

})

/**
 * @path router/api/profile
 * @desc Get user's data
 * @access Private
 */
router.get('/profile',passport.authenticate('jwt', {
    session:false
}), (req, res) => {
    return res.status(200).json({
        user: req.user
    })
})


module.exports = router
