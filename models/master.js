const mongoose=require('mongoose');
var newschema={
    id:{
        type:String,
        trim:true,
        required:true,

    },
    usertype:{
        type:String,
        trim:true,
        required:true,

    },
   accessCusSer:{
        type:String,
        trim:true,
        required:true
    },
    accessorder:{
        type:String,
        trim:true,
        required:true
    },
   paymentsetting:{
    type:String,
        trim:true,
        required:true
    },
   createdDt:{
    type:Date,
    required:true
   },
   modifyDt:{
    type:Date,
    required:true
   }
}
module.exports=master=mongoose.model('masters',newschema)