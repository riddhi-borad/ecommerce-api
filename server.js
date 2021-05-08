
const express=require('express');
const app=express();
var cors=require('cors');
app.use(cors({credentials: true,methods: "GET, POST"}));

let mongoose=require('mongoose');
    username='dev';
    password='dev123';
    dbName='Login';
    mongoDBUri=`mongodb+srv://${username}:${password}@cluster0.nbxam.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(mongoDBUri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("Connected!");
}).catch((err)=>{
    console.log(err);
})

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port=5000;

app.listen(port,()=>{
    console.log(port);
})
app.get('/',(req,res)=>{
    res.send('welcome')
})
const login=require('./Routers/login');
const registration=require("./Routers/registration");
const category=require("./Routers/category");
const product=require("./Routers/product");
const admin=require("./Routers/master");
const order=require("./Routers/order");
app.use('/',login,registration,category,product,admin,order);
