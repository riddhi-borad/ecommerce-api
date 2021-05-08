const mongoose=require('mongoose');
const Schema=mongoose.Schema
var newschema=new mongoose.Schema({
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
    catId:{
        type:Number,
        trim:true,
        required:true,
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
},
{
    toObject: {virtuals:true},
    toJSON: {virtuals:true} 
});

newschema.virtual('category', {
    ref: 'categories',
    localField: 'catId',
    foreignField: 'categoryid',
    justOne: true // for many-to-1 relationships
  });
module.exports=Product=mongoose.model('products',newschema)