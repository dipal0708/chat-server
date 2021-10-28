
const mongoose = require('mongoose'),
    conn = mongoose.connect(process.env.DB_URI, {
        auth: {
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD
        },
        dbName: process.env.DB_NAME,
        // authSource: process.env.DB_NAME,
        //  poolSize: 1,
        socketTimeoutMS: 1000,
        family: 4,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        //  useCreateIndex: true,
        //  useFindAndModify: false,
        retryWrites: true,
        w: 'majority'
    });

mongoose.connection.once('connected', () => {
    console.info(`mongoose successfully connected with DB: ${process.env.DB_NAME}`);
});

mongoose.connection.once('error', (err) => {
    console.error(`mongodb connection error: ${err.message}`);
});

mongoose.connection.once('disconnected', () => {
    console.info(`DB successfully dis-connected: ${process.env.DB_NAME}`);
});

process.once('SIGINT', function () {
    mongoose.connection.close(() => {
        console.log(`Mongoose default connection is disconnected due to application termination: ${process.env.DB_NAME}`);
        process.exit(0);
    });
});

module.exports = conn