const mongoose = require('mongoose');

const categSchema= new mongoose.Schema({
    nom:{ type:String, required:true }, 
    desc:{ type:String, required:true },
    img:{ type:String, required:true },
});

const Categorie = mongoose.model("Categories",categSchema);
module.exports = Categorie;