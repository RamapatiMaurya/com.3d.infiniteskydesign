const { Double } = require('mongodb');
var mongoose = require('./connection');

const fileSchema = new mongoose.Schema({
    title: String,
    description: String,
    width: String,
    height: String,
    units:String,
    rooms:String,
    floors: String,
    showingmode: String,
    facing: String,
    vastu: String,
    porch: String,
    lawn: String,
    serventroom: String,
    poojaroom: String,
    storeroom: String,
    budgetamount: String,
    currency: String,
    uploaded_by: String,
    uploaded_date: Date,
    mapdigitalpath: String,
    maphandmadepath: String
    

})

const FileInfoModel = mongoose.model('map_media', fileSchema)

module.exports = FileInfoModel