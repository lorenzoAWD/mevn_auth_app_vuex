

if(process.env.NODE_ENV === 'production'){
    module.exports = {
        mongoURI: "mongodb+srv://devlo:1234@cluster0.4rqyd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        secret: 'secretkey'
    }
}
else{
    module.exports = {
        mongoURI: "mongodb+srv://devlo:1234@cluster0.4rqyd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        secret: 'secretkey'
    }
}
