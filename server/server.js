require('./config/config')

const _ = require('lodash')
const express = require('express')
const bodyParser = require('body-parser')

const { originCheck } = require('./middleware/origin-check')
const { Client } = require('./models/Client')

const app = express()
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000
app.get('/', (req, res) => {
  res.send('Working fine')
})

app.post('/api/v1', originCheck, (req, res) => {
  const body = _.pick(req.body, ['firstName','lastName','email','phoneNumber','message'])
  let client = new Client(body)
  
  client.save().then(dbRes => {
    res.send(dbRes)
  }).catch(err => {
    res.status(500).send(err)
  })
})



app.listen(PORT, (err) => {
  if (err) return console.log(err)
  console.log(`Express server started at ${PORT}`)
})