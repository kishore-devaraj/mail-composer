'use strict'

const mailer = require('nodemailer')
const auth = require('./mail-auth.json')
const smtpTransport = mailer.createTransport({
  service: 'gmail',
  auth: {
    user: auth.emailId,
    pass: auth.password
  }
})

let mail = {
  from: "kishore.github.io@gmail.com",
  to: "kishoregrylls@gmail.com",
  subject: "Someone wants to have coffee with you!",
  text: "Hi, Can we speak business over coffee"
}

smtpTransport.sendMail(mail, function (err, response) {
  if (err) {
    console.log(err)
  } else {
    console.log("Message sent: " + response.message)
  }
  smtpTransport.close()
})
