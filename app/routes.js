
const middlewares = require('./middlewares'),
    controllers = require('./controller');
module.exports = (app) => {

    app.get('/', (req, res) => {
        return res.status(200).json({ message: 'Server is running' })
    })

    app.post(
        '/auth/generate-twilio-token',
        // middlewares.auth.generate_twilio_token,
        controllers.auth.generate_twilio_token
    )

}