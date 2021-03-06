const mongoose=require('mongoose');
const Schema=mongoose.Schema
var newschema={
    orderId:{
        type:String,
        trim:true,
        required:true,
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:"users",
    },
    categoryId:{
        type:Schema.Types.ObjectId,
        ref:"categories",
    },
    subcategoryName:{
        type:String,
        trim:true,
        // required:true
    },
    prodNm:{
        type:String,
        trim:true,
        required:true,
    },
    prodDesc:{
        type:String,
        trim:true,
        required:true,
    },
    prodImg:{
        type:String,
        trim:true,
        required:true,
    },
    prodprice:{
        type:String,
        trim:true,
        required:true,
    },
    discount:{
        type:String,
        trim:true,
        required:true,
    },
    quantity:{
        type:String,
        trim:true,
        required:true,
    },
    Address:{
        type:String,
        trim:true,
        required:true,
    },
    status:{
        type:String,
        trim:true,
        required:true,
    },
   
}
module.exports=Order=mongoose.model('orders',newschema)