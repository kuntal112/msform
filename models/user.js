const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
    },
    mobileNumber:{
        type:String,
        required:true
    },
    address:{
        type:String,
    },
    lastEduQualifiation:{
        type:String,
        required:true
    },
    companyName:{
        type:String
    },
    designation:{
        type:String
    },
    skills:{
        type:String,
        required:true
    },
    doc1:{
        type:String,
        required:true
    }
})
mongoose.model("User",userSchema);