const express = require("express")
const formidable = require("formidable")
const fs = require("fs")

const Catego = require("../modals/coursCateg")
const router = express.Router();


//Create Form
const createForm = (req, res) => {
    const form = new formidable.IncomingForm()
    form.parse(req, (err, fields, file) => {
        if (err) {
            return res.status(400).json({ error: err })
        }
        if (!fields.nom || !fields.desc || !file.photo) {
            return res.status(400).json({ error: "Fill all the fields" })
        }

        const categ = new Catego(fields)
        if (file.photo) {
            if (file.photo.size > 100000) {
                return res.status(400).json({ error: "file size is too big" })
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
    let id = req.params.categId;
    const form = new formidable.IncomingForm()
    form.parse(req, (err, fields, file) => {
        if (err) {
            return res.status(400).json({ error: err })
        }
       Catego.findByIdAndUpdate(
        id,
        {$set:{...fields}},
        {new:true},
        (err,categ)=>{
            if (err) {
                return res.status(400).json({ error: "categ not found" })
            } 
            if (file.photo) {
                if (file.photo.size > 100000) {
                    return res.status(400).json({ error: "file size is too big" })
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
    let id = req.params.categId;
    Catego.findById(id).exec((err, categ) => {
        if (err || !categ) {
            res.status(400).json({ error: "categ not found" })
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
    Catego.find((err, data) => {
        if (err) {
            return res.json({ error: err })
        }
        res.json(data)
    })
}

const deleteForm=async(req,res)=>{
    const id = req.params.categId;
    const del = await Catego.findByIdAndDelete(id)
    res.json(del)
}

router.post("/create", createForm)
router.get("/get", getForm)
//for photo
router.get("/photo/:categId", categPhoto)
router.put("/edit/:categId", updateForm)
router.delete("/delete/:categId",deleteForm)

module.exports = router; 