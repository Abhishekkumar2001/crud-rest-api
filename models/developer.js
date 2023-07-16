// require mongoose 
const mongoose = require('mongoose');

//Create the Schema for Developer
const developerSchema = new mongoose.Schema({
    name :{
        type : String
    },
    email :{
        type : String,
        unique : true,
        required : true
    },
    password :{
        type : String,
        required : true
    },
    technology : {
        type : String,
        required : true
    },
    employed : {
        type : String,
        default : false
    }
},{timestamps : true})

module.exports = mongoose.model("Developer", developerSchema);