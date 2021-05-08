const mongoose=require('mongoose');
const Schema=mongoose.Schema
var ObjectId=Schema.ObjectId;
var newschema=new mongoose.Schema({
    categoryid:{
        type:Number,
        trim:true,
        required:true,

    },
    categorytype:{
        type:String,
        trim:true,
        required:true,

    },
   subcategory:{
        type:String,
        trim:true,
        required:true
    },
    catname:{
        type:String,
        trim:true,
        // required:true
    },
   
});
module.exports=category=mongoose.model('categories',newschema)