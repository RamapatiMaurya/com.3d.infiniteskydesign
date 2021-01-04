var mongoose = require('./connection');

const userSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    password: String,
    uploaded_by: String,
    uploaded_date: Date,
    profile: String,
})

const user = mongoose.model('sky_user', userSchema)

module.exports = user