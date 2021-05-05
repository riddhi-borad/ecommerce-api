const express = require("express");
const router = express.Router();
const User = require("../models/registration");
const bcrypt = require("bcryptjs");
router.post("/register", (req, res) => {
  var flagname,flagemail,flagpass,flagspace,errmsg="";
  
  if(!req.body.Name.match(/^[A-Za-z\\s]+$/)){
    flagname=false;
    errmsg="Please enter alphabates only, in Name. ";
  }
  if(!req.body.email.match(/^.+@[^\.].*\.[a-z]{2,}$/)){
  flagemail=false;
    errmsg+="Please enter valid email. ";
  }
  if(!req.body.password.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{4,8}$/)){
    flagpass=false;
    errmsg+="Password must be 4-8 char, at least one upper case, one lower case, one numeric and one special character from `@ # $ % ^ & *`. ";
  }
  if(req.body.password.indexOf(" ") > 0){
    flagspace=false;
    errmsg+="Space is not allowed in password. "
  }
  if(flagname==false || flagemail==false || flagpass==false ||  flagspace==false){
    var msg=errmsg;
    errmsg="";
    res.status("400").json({ msg: msg });
  }else
  {
    let user = {
      Name: req.body.Name,
      mail: req.body.email,
      password: req.body.password,
    };
    bcrypt.hash(req.body.password, "$2a$10$9qeA/55oughPL85/246siu", function (err, hash) {
        user.password = hash;
        new User(user)
          .save()
          .then(() => {
            res.status("200").json({ msg: "Data Inserted Successfully" });
          })
          .catch((err) => {
            console.log(err);
          });
    });
  }
});
module.exports = router;