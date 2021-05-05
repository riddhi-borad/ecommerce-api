const mongoose=require('mongoose');
var newschema={
    Name:{
        type:String,
        trim:true,
        required:true,

    },
    mail:{
        type:String,
        trim:true,
        // required:true,

    },
    password:{
        type:String,
        trim:true,
        required:true
    },
    // mobileNo:{
    //     type:Number,
    //     trim:true,
    //     required:true
    // },
    // userType:{
    //     type:String,
    //     trim:true,
    //     required:true,
    // },
    // Image:{
    //     type:String,
    //     trim:true,
    // },
    // address:{
    //     tyep:String,
    //     trim:true,
    //     required:true,
    // },

   
}
module.exports=User=mongoose.model('users',newschema)