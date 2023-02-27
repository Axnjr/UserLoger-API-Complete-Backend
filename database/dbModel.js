const mongoose = require("mongoose")

const dbSchema = mongoose.Schema({
    Name:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:false
    },
    message:{
        type:String,
        required:false
    },
    date: { type: Date, default: Date.now },
})

module.exports = mongoose.model( "portfolioVisitors" , dbSchema )