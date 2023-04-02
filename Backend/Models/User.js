const mongoose =require('mongoose')

const Userschema= new mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    email: {
        type: String,
        required: true
    },
    date:{
        type:Date,
        defaule:Date.now
    }

}) 

module.exports=mongoose.model('users',Userschema)