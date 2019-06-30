require('./config/config')

const _ = require('lodash')
const express = require('express')
const bodyParser = require('body-parser')
const {sendMail} = require('./mailer/mailer')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const PORT = process.env.PORT || 3000
app.get('/', (req, res) => {
    res.send('Mail server is up ;)')
})

app.post('/api/v1', (req, res) => {
    const body = _.pick(req.body, ['firstName', 'lastName', 'email', 'phoneNumber', 'message'])
    sendMail(body)
    res.send('Your details are now travelling on under water sea cables :P')
})


app.listen(PORT, (err) => {
    if (err) return console.log(err)
    console.log(`Express server started at ${PORT}`)
})