const mongoose = require('mongoose');

const UserSchema= new mongoose.Schema(
    {
        nom:{ type:String, required:true },
        prenom:{ type:String, required:true },
        email:{ type:String, required:true,unique:true },
        pass:{ type:String, required:true},
        role:{
            type: String,
            default: "student"
        }
    },
    {collection:"UserDetails",}

);
const User = mongoose.model("UserDetails",UserSchema);
module.exports = User;