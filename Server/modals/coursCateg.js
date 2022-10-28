const mongoose = require("mongoose")


const categSchema = mongoose.Schema({
   nom:{
        type:String,
        required:true,
      
    },
    desc:{
        type:String,
       
    },
    photo:{
        data:Buffer,
        contentType:String,
    },
})

module.exports = (mongoose.model("coursCateg",categSchema))