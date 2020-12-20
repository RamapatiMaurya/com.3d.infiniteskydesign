var mongoose = require('../modules/connection');

const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    remark: String
})

const ContactModel = mongoose.model('Contact', contactSchema)

module.exports = ContactModel