const express = require("express");
const router = express.Router();
const Category=require("./../models/categories");
router.post('/saveCategory',(req,res)=>{
    let addCategory={
    categoryId:Math.random(),
    categorytype:req.body.categorytype,
    subcategory:req.body.subcategory,
    catname:req.body.catname
}
new Category(addCategory).save()
    .then(()=>{
        res.status(200).json({msg:"category inserted !"});
    }).catch((err)=>{
        console.log(err);
    })
})
module.exports = router;