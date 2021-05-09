const express = require("express");
const mongoose = require("mongoose");
const { MONGOURI } = require("./config/keys")
const app = express();
require("./models/user")
// connection to mongoDb
mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.on('error', () => {
    console.log("error")
})
mongoose.connection.on('connected', () => {
    console.log("connected successfully")
});
const userModel = new mongoose.model("User");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
PORT =process.env.PORT ||8000;
// signup route
app.post("/signup", (req, res) => {
    // destructuring fields
    const { firstName,
        lastName,
        mobileNumber,
        address,
        lastEduQualifiation,
        companyName,
        designation,
        skills,
        doc1 } = req.body;
        // server side validation
        if(!firstName || !mobileNumber || !lastEduQualifiation || !skills || !doc1){
            return res.json({error:"please fill all the required fields"});
        }
        // creating new user 
    const User = new userModel({
        firstName,
        lastName,
        mobileNumber,
        address,
        lastEduQualifiation,
        companyName,
        designation,
        skills,
        doc1
    })
    // save user to database
    User.save().then(user => {
        res.json({
            message: "SignedUp succesfully"
            
        })
    }).catch(err => console.log(err))
})
// for production 
if(process.env.NODE_ENV=="production"){
    app.use(express.static("msform/build"))
    const path=require("path");
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'msform','build','index.html'))
    })
}
app.listen(PORT, () => {
    console.log("app is running on port ", PORT)
})
