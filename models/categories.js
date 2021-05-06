const mongoose=require('mongoose');
var newschema={
    categoryId:{
        type:String,
        trim:true,
        required:true,

    },
    // categorytype:{
    //     type:String,
    //     trim:true,
    //     required:true,

    // },
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
   
}
module.exports=category=mongoose.model('categories',newschema)