'use strict'

const mailer = require('nodemailer')
const smtpTransport = mailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: false,
    auth: {
        user: process.env.emailId,
        pass: process.env.password
    }
})


function sendMail(clientData) {
    let mail = {
        from: "kishore.github.io@gmail.com",
        to: "kishoregrylls@gmail.com",
        subject: "Someone wants to have coffee with you!",
        // language=HTML
        html: `Hi, 
          <br/><br/>
          
          Someone has recently viewed your portfolio.<br/>
          They have left some details for you to contact them back
          <br/><br/>
          
          <b>Name</b>: ${clientData.firstName + ' ' + clientData.lastName} <br/>
          <b>Email</b>: ${clientData.email} <br/>
          <b>PhoneNumber</b>: ${clientData.phoneNumber} <br/>
          <b>Message</b>: ${clientData.message} <br/>
          <br/><br/>
          
          Good Luck!`
    }

  smtpTransport.sendMail(mail, function (err, response) {
    if (err) {
      console.log(err)
    } else {
      console.log("Message status: " + response.response)
    }
    smtpTransport.close()
  })
}

module.exports = {
    sendMail
}