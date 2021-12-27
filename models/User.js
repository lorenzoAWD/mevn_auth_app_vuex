const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

//Uso la collection "users" del database
let collection = 'users'
module.exports = User = mongoose.model(collection, UserSchema)
