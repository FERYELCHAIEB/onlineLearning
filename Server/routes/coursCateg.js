const express = require("express")
const formidable = require("formidable")
const fs = require("fs")

const Categories = require("../modals/coursCateg");
const router = express.Router();


//Create Form
const createForm = (req, res) => {
    const form = new formidable.IncomingForm()
    form.parse(req, (err, fields, file) => {
        if (err) {
            return res.status(400).json({ error: err })
        }
        if (!fields.nom || !fields.desc || !file.photo) {
            return res.status(400).json({ error: "Tous les champs sont requis" })
        }

        const categ = new Categories(fields)
        if (file.photo) {
            if (file.photo.size > 100000) {
                return res.status(400).json({ error: "photo de grande taille" })
            }
            categ.photo.data = fs.readFileSync(file.photo.filepath)
            categ.photo.contentType = file.photo.mimetype

            categ.save((err, result) => {
                if (err) {
                    return res.status(400).json({ error: err })
                }
            })
            res.json({ categ })
        }
    })

}
const updateForm = (req, res) => {
    let id = req.params.id;
    const form = new formidable.IncomingForm()
    form.parse(req, (err, fields, file) => {
        if (err) {
            return res.status(400).json({ error: err })
        }
       Categories.findByIdAndUpdate(
        id,
        {$set:{...fields}},
        {new:true},
        (err,categ)=>{
            if (err) {
                return res.status(400).json({ error: "categorie non existante" })
            } 
            if (file.photo) {
                if (file.photo.size > 100000) {
                    return res.status(400).json({ error: "fichier de grand taille" })
                }
                categ.photo.data = fs.readFileSync(file.photo.filepath)
                categ.photo.contentType = file.photo.mimetype
    
                categ.save((err, result) => {
                    if (err) {
                        return res.status(400).json({ error: err })
                    }
                })
                res.json({ categ })
            }

        }
       )
    })
}


const categPhoto = (req, res) => {
    let id = req.params.id;
        Categories.findById(id).exec((err, categ) => {
        if (err || !categ) {
            res.status(400).json({ error: "categorie non trouvé" })
        }
        else {
            if (categ.photo.data) {
                res.set("Content-Type", categ.photo.contentType)
                return res.send(categ.photo.data)
            }
        }
    })
}

//getForm
const getForm = (req, res) => {
    Categories.find((err, data) => {
        if (err) {
            return res.json({ error: err })
        }
        res.json(data)
    })
}

const deleteForm=async(req,res)=>{
    const id = req.params.id;
    const del = await Categories.findByIdAndDelete(id)
    res.json(del)
}

router.post("/create", createForm)
router.get("/get", getForm)
//for photo
router.get("/photo/:id", categPhoto)
router.put("/edit/:id", updateForm)
router.delete("/delete/:id",deleteForm)

module.exports = router; 