const { Double } = require('mongodb');
const mongoose = require('mongoose');

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

const FileInfoModel = mongoose.model('mapinfo', fileSchema)

mongoose.connection.on("connected",function(){
    console.log("Connected successfully")
})

mongoose.connection.on("disconnected",function(){
    console.log("Disconnected successfully")
})

mongoose.connection.on("error", console.error.bind(console, 'connection error:'))


module.exports = FileInfoModel