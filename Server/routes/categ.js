const express = require("express");
const router = express.Router();
const Categories = require("../modals/categorie");
const multer = require("multer");



const storage = multer.diskStorage({
    destination : (req, file, cb)=>{
      cb(null,"../src/images/") ; 
    },
    filename: (req, file, cb)=>{
       cb(null,file.originalname) ;
    }
})

const upload = multer({storage : storage});


//get all catégorie
router.get("/get-categories",(req,res)=>{
    Categories.find()
    .then((categ)=>{res.json(categ)
    })
    .catch((err)=>res.status(400).json(`error: ${err}`));
});

// api for adding new categorie
router.post("/add-categorie",upload.single("img"),(req,res)=>{
    const newCtegorie =new Categories({
        nom: req.body.nom,
        desc: req.body.desc,
        img: req.file.originalname,
    });
    newCtegorie.save()
    .then(()=>res.json("catégorie ajouté avec succés"))
    .catch((err)=>res.status(400).json(`error: ${err}`));
})


//get a catégorie by id

router.get("/get-categ/:id",(req,res)=>{
    Categories.findById(req.params.id)
    .then((categ)=>res.json(categ))
    .catch((err)=>res.status(400).json(`error: ${err}`));
});


// update an article
router.put("/edit-categ/:id",upload.single("img"),(req,res)=>{
    const categ ={
        nom:req.body.nom,
        desc:req.body.desc,
        img: req.file.originalname,
        
    };
   Categories.findByIdAndUpdate(req.params.id, { $set:categ },{ new:true },(err,data)=>{
        if(!err){
res.status(200).json({message:'categ modifié avec succés',updatedCateg: data});
        }else{
            console.log(err);
        }
    })
});


// api for delete

router.delete("/delete-categ/:id",(req,res)=>{
    Categories.findByIdAndRemove(req.params.id)
    .then(()=>res.json("categ supprimé!"))
    .catch((err)=>res.status(400).json(`error: ${err}`))
});






module.exports = router;