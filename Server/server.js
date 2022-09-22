const express = require("express");
const app =express();
const mongoose = require("mongoose");
const session = require("express-session");
const {v4:uuidv4} = require("uuid");
app.use(express.json());
const cors=require("cors");
app.use(cors());
app.set("view engine","ejs");
app.use(express.urlencoded({ extended:false }));
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");
const dotenv = require('dotenv');
const JWT_SECRET ="fegzrrjtudjgseejapj7685647yphfvnfdyr-y?gnnrtij,rtt554557"


//const mongoUrl = 'mongodb+srv://admin:adminadmin@cluster0.nhpsqwl.mongodb.net/?retryWrites=true&w=majority';

app.use(session({
    secret:uuidv4(),
    resave: false,
  saveUninitialized: true,
 
}));



require("./modals/user")
const User=mongoose.model("UserDetails")


app.post("/register",async(req,res)=>{
    const {nom,prenom,email,pass}=req.body;
    const encryptPass = await bcrypt.hash(pass,10);
    
    try {

        const exist = await User.findOne({email});
        if(exist){
          return  res.send({error:"email déjà existant"});
        }
        await User.create({
            nom,
            prenom,
            email,
            pass:encryptPass,
        });
        res.send({status:"succés de creation"})
    } catch (error) {
        res.send({status:"erreur de creation"})
    }
});

app.post("/login",async(req,res)=>{
    const {email,pass}=req.body;

        const existUser = await User.findOne({email});
        const role = existUser.role;
        if(!existUser){
          return  res.send({error:"email non existant"});
        }
        if(await bcrypt.compare(pass,existUser.pass)){
            const token = jwt.sign({email:existUser.email},JWT_SECRET,{expiresIn:'4h'});
            if(res.status(201)){
                return res.json({status:'ok',userEmail:email,userPass:pass,userRole:role,data:token})
            }else return res.json({status:'error'})
        }
       
        return res.json({status:'error',error:"pass invalide"});
});
/*************************************************/ 
app.post("/userInfo",async(req,res)=>{
    const {token} = req.body;
    try {
        const user = jwt.verify(token,JWT_SECRET);
        const userEmail= user.email;
    User.findOne({email:userEmail}).then((data)=>{
    res.send({status:"ok",data:data});
}).catch((error)=>{
    res.send({status:"error",data:data})
});
    } catch (error) {
        
    }

});

/*************************************************/ 
app.get("/logout", function(req, res) {
    req.session.destroy(() => {
     req.logout();
   
    });
   });

/*************************************************/ 
   app.post("/forgot-pass",async(req,res)=>{
const {email}=req.body;
try {
    const existUser = await User.findOne({ email });
    if(!existUser){
        res.json({status:"utilisateur non reconnu"});
    }
const secret = JWT_SECRET + existUser.pass;
const token = jwt.sign({ email: existUser.email, id: existUser._id },secret,{expiresIn:'1h'});
const link = `http://lo calhost:5000/reset-pass/${existUser._id}/${token}`;
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ingprojet4@gmail.com',
      pass: 'uqsibbmzimoaaaex'
    }
  });
  
  var mailOptions = {
    from: 'youremail@gmail.com',
    to: existUser.email,
    subject: 'Password Reset',
    text: link,
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
console.log(link);
} catch (error) {
    
}
   });

// this api is useful to get link to reset the password
app.get("/reset-pass/:id/:token", async(req,res)=>{
    const {id,token}=req.params;
    console.log(req.params);
    const existUser = await User.findOne({ _id: id });
    if(!existUser){
        res.json({status:"utilisateur non reconnu"});
    }

    const secret = JWT_SECRET + existUser.pass;
    try {
        const verify=  jwt.verify(token,secret);
      res.render("index",{email: verify.email, status: "not verified"});
    } catch (error) {
     res.send("not verified")   
    }
      
});
/*************************************************/ 
app.post("/reset-pass/:id/:token", async(req,res)=>{
    const {id,token}=req.params;
    const {pass}=req.body;
    const existUser = await User.findOne({ _id: id });
    if(!existUser){
        res.json({status:"utilisateur non reconnu"});
    }

    const secret = JWT_SECRET + existUser.pass;
    try {
        const verify=  jwt.verify(token,secret);
        const encryptPass = await bcrypt.hash(pass,10);
        await User.updateOne(
        {
            _id: id 
        },
        {
            $set:{
                pass:encryptPass
            },
        }
        );
       // res.json({status:"mot de passe modifié avec succés"});
       res.render("index",{ email:verify.email, status:"verified" }) 
    
    } catch (error) {
        res.json({status:"erreur"}) ; 
    }
      
})







/*api for all user*/ 
app.get("/users/:id",(req,res)=>{
  let id = req.params.id;
  const user =User.findById({_id:id})
  if(user){
    res.json(user);
  }
})



app.use("/",require("./routes/index"))
app.use("/",require("./routes/coursCateg"))
const connectDB= require("./config/db");
dotenv.config({path:'./config/config.env'})

connectDB();

app.listen(5000,()=>{
    console.log("server started");
})