const { mongoose } = require('../db/db')
const validator = require('validator')
const _ = require('lodash')

const ClientSchema = new mongoose.Schema({
  firstName: {
    type: 'String',
    required: true,
    trim: true,
    minlength: 1
  },
  lastName: {
    type: 'String',
    required: true,
    trim: true,
    minlength: 1
  },
  email: {
    type: 'String',
    required: true,
    trim: true,
    minlength: 3,
    validate: {
      validator: (value) => validator.isEmail(value)
    },
    message: '{VALUE} is not a valid email'
  },
  phoneNumber: {
    type: 'String',
    required: true,
    trim: true,
    minlength: 7
  },
  message: {
    type: 'String',
    required: true,
    minlength: 1,
    trim: true
  }
})

ClientSchema.methods.toJSON = function () {
  const client = this
  const clientObj = client.toObject()
  const json = _.pick(clientObj, ['_id', 'email'])
  return json
}

const Client = mongoose.model('Client', ClientSchema)

module.exports = {
  Client
}