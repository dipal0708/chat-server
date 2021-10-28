const express = require('express'),
app = express();

require('dotenv').config()


app.use(express.urlencoded({ extended: true }));
app.use(express.json()) // To parse the incoming requests with JSON payloads

require("./app/routes")(app);

require('./db').then(db => {
app.listen(process.env.PORT, () => console.info(`Server runnig on port ${process.env.PORT}`))
})