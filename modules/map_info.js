const { Double } = require('mongodb');
var mongoose = require('./connection');

const fileSchema = new mongoose.Schema({
    p_title: String,
    p_path1: String,
    p_path2: String,
    p_description: String,
    uploaded_by: String,
    file_name1: String,
    file_name2: String,
    measurement_unit: String,
    facing: String,
    currency: String
    

})

const FileInfoModel = mongoose.model('Contact', fileSchema)

module.exports = FileInfoModel