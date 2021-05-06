const express = require("express");
const router = express.Router();
const Product=require("./../models/product");
const upload=require('./../config/multer')
router.post('/saveproduct',upload.array("image",4),(req,res)=>{
    const reqFiles = [];
    const url = req.protocol + '://' + req.get('host')
    console.log(req.files)
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(req.files[i].filename)
    }
    let addproduct={
    productId:Math.random(),
    type:req.body.type,
    categoryId:req.body.categoryId,
    brand:req.body.brand,
    length:req.body.length,
    design:req.body.design,
    description:req.body.description,
    return:req.body.return,
    image:reqFiles,
    conditions:req.body.conditions,    
}
new Product(addproduct).save()
    .then(()=>{
        res.status(200).json({msg:"product inserted !"});
    }).catch((err)=>{
        console.log(err);
    })
})

router.get('/viewprod',(req,res)=>{
    Product.find({ })
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})
module.exports = router;