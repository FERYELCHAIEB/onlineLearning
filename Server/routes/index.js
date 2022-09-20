const express= require('express');
const router = express.Router();

const User = require('../modals/user');

router.get('/get-users',(req,res)=>{
    User.find({ role:'student'},(err,data)=>{
        if(!err){
            res.send(data);
        }
        else  
        {console.log(err);}
    });
});

router.get('/get-user/:id',(req,res)=>{
    User.findById(req.params.id,(err,data)=>{
        if(!err){
            res.send(data);
        }
        else 
        {console.log(err);}
    });
});

router.put('/edit-user/:id',(req,res)=>{
    const user ={
        nom:req.body.nom,
        prenom:req.body.prenom,
        email:req.body.email,
        role:req.body.role,
    };
    User.findByIdAndUpdate(req.params.id, { $set:user },{ new:true },(err,data)=>{
        if(!err){
res.status(200).json({message:'user modifié avec succés',updatedUser: data});
        }else{
            console.log(err);
        }
    })
});
/************************************/ 

router.delete('/delete-user/:id',(req,res)=>{
User.findByIdAndRemove(req.params.id,(err,data)=>{
    if(!err){
        res.status(200).json({message:'user supprimé avec succés'})
    }else{
        console.log(err);
    }
})
});


/*API for teachers*/ 
router.get('/get-teachers',(req,res)=>{
    User.find({ role:'teacher' },(err,data)=>{
        if(!err){
            res.send(data);
        }
        else  
        {console.log(err);}
    });
});

//count numbers of users
router.get('/count-users',async(req,res)=>{

    try {
        const count_data=[]
   const user_count = await User.find().count() ;
   const teacher_count = await User.find({role:'teacher'}).count() ;
   const student_count = await User.find({role:'student'}).count() ;
   const admin_count = await User.find({role:'admin'}).count() ;

   count_data.push({
    all:user_count,
    teacher:teacher_count,
    student:student_count,
    admin:admin_count,
   }) 
   res.status(200).send(count_data);
        
    } catch (error) {

        res.status(400).send({success:false, msg:error.message});
    }
})



module.exports = router;