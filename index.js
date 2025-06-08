const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/', (req, res) => {

    res.json( {msg:"Hello World!"} )
})

app.post("/login",(req,res)=>{

    //request -->database-->true
    //generate token
    //sing userdata
    var user = { id:1,username:"prakash",age:23};

    jwt.sign( {user:userdata},"secretkey",(err,token) => {
        if(err) {
            res.json({error:err})
        }else{
            res.json({token:token})
        }



})

app.listen(4000, () => {
    console.log('app is listening for port 4000')
})