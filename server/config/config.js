const env = process.env.NODE_ENV || 'development'
const auth = require('../mailer/mail-auth');

console.log('Running in', env)

if (env === 'development') {
    // const config = require('./config.json')
    // const envConfig = config[env]
    
    const envConfig = auth;
    
    Object.keys(envConfig).forEach(key => {
        process.env[key] = envConfig[key]
    })
}