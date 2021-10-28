const AccessToken = require('twilio').jwt.AccessToken;
const ChatGrant = AccessToken.ChatGrant;

module.exports = () => {
    return new Promise(async (resolve, reject) => {
        try {
            // Create a "grant" which enables a client to use Chat as a given user,
            // on a given device
            const chatGrant = new ChatGrant({
                serviceSid: process.env.SERVICESID,
            });

            // Create an access token which we will sign and return to the client,
            // containing the grant we just created
            const token = new AccessToken(
                process.env.TWILIOACCOUNTSID,
                process.env.TWILIOAPIKEY,
                process.env.TWILIOAPISECRET,
                { identity: process.env.IDENTITY }
            );

            token.addGrant(chatGrant);

            // Serialize the token to a JWT string
            console.log(token.toJwt());
            return resolve(token.toJwt());
        } catch (err) {
            return reject(err)
        }
    })
}