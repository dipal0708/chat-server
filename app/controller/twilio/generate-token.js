const service = require('../../services/twilio/generatetoken')

module.exports = (req, res, next) => {
    service().then(response => {
        return res.send(200, { status: true, message: 'Token successfully generated', data: response })
    }).catch(error => {
        return res.send(error.code, { status: false, message: error.message })
    }).finally(() => {
        return next()
    })
}