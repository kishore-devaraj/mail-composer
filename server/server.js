const express = require('express')
const _ = require('lodash')
const bodyParser = require('body-parser')

const { originCheck } = require('./middleware/origin-check')

const app = express()
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000
app.get('/', (req, res) => {
  res.send('Working fine')
})

app.post('/api/v1', originCheck, (req, res) => {
  const body = req.body
  for (let key in body) {
    if(body.hasOwnProperty(key)){
      // console.log(body[key])
    }
  }
  res.send('API under construction')
})



app.listen(PORT, (err) => {
  if (err) return console.log(err)
  console.log(`Express server started at ${PORT}`)
})