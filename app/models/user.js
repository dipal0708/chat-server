const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    collection = new Schema({
        userName: String,
        empCode: String,
        firstName: String,
        lastName: String,
        email: String,
        managerId: {
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
    }, {
        timestamps: true,
        strict: true
    })

module.exports = mongoose.model('user', collection)