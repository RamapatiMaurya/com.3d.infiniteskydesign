const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/contact', {useNewUrlParser: true});
mongoose.connect('mongodb+srv://RamapatiMaurya:Ramapati123@cluster0.cf6xo.mongodb.net/media_info?retryWrites=true&w=majority', 
{useNewUrlParser: true}, ()=>{console.log('Remote DB connected!')});

var connection = mongoose.connection

module.exports = mongoose