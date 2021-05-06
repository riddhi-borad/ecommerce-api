const express = require("express");
const router = express.Router();
const Order=require("./../models/order");
router.post('/addorder',(req,res)=>{
    let addorder={
    orderId:Math.random(),
    userId:req.body.userId,
    categoryId:req.body.categoryId,
    subcategoryName:req.body.subcategoryName,
    prodNm:req.body.prodNm,
    prodDesc:req.body.prodDesc,
    prodImg:req.body.productImg,
    prodprice:req.body.prodprice,
    discount:req.body.discount,
    quantity:req.body.quantity,
    Address:req.body.Address,
    status:req.body.status,
}
new Order(addorder).save()
    .then(()=>{
        res.status(200).json({msg:"Ordered succesfully !"});
    }).catch((err)=>{
        console.log(err);
    })
})
module.exports = router;