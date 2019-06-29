const originCheck = ((req, res, next) => {
  const origin = req.headers.origin
  if (origin.indexOf('chrome-extension') !== -1 || origin.indexOf('https://kishore-devaraj.github.io') !== -1) {
    next()
  } else {
    res.sendStatus(401).send('Unauthorized request')
  }
})

module.exports = {
  originCheck
}