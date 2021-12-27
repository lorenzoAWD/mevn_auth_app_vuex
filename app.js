const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const { send } = require('process')
const passport = require('passport')


const app = express()

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.use(cors())

app.use(express.static(path.join(__dirname, 'public')))

app.use(passport.initialize())
require('./config/passport')(passport)

//Qualsiasi altra richiesta che non sia una inclusa in api/users verrà indirizzata verso 'public/index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

// app.get('/', (req,res) => {
//     res.send("<h1>Hello</h1>")
// })
//localhost:5000/routes/api/users = localhost:5000/api/users
const users = require('./routes/api/users')
app.use('/api/users', users)
//localhost:5000/routes/api/users = localhost:5000/pincopallino
// app.use('/pincopallino', users)

const dbUrl = require('./config/keys').mongoURI
mongoose.connect(dbUrl, {useNewUrlParser:true} ).then( () => {
    console.log(`Database connected succesfully: ${dbUrl}`)
}).catch( err => {
    console.log(`Unable to connect with database ${err}`)
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`)
})
