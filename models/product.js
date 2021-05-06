const mongoose=require('mongoose');
const Schema=mongoose.Schema
var newschema={
   productId:{
        type:String,
        trim:true,
        required:true,

    },
    type:{
        type:String,
        trim:true,
        // required:true,

    },
    categoryId:{
        type:Schema.Types.ObjectId,
        ref:"categories",
    },
    brand:{
        type:String,
        trim:true,
        required:true
    },
    length:{
        type:String,
        trim:true,
    },
    size:{
        type:String,
        trim:true,
        // required:true,
    },
    design:{
        type:String,
        trim:true,
        // required:true,
    },
    description:{
        type:String,
        trim:true,
        required:true,
    },
    return:{
        type:String,
        trim:true,
        // required:true,
    },
    refunds:{
        type:String,
        trim:true,
        // required:true,
    },
    image:{
        type:Array,
        trim:true,
        // required:true,
    },
    conditions:{
        type:String,
        trim:true,
        // required:true,
    },
}
module.exports=Product=mongoose.model('products',newschema)