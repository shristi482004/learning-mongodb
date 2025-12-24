const express = require('express');
const app=express();
const userModel=require('./usermodel')

app.get('/',(req,res)=>{
    res.send("This is my first express app");
});
app.get('/create',async (req,res)=>{
   let createdUser=await userModel.create({
    name:"Shreya",
    username:"shreya482004",
    age:17,
    city:"Bangalore",
    email:"shreya@shreya.com"
   })
   res.send(createdUser);
});
app.get('/read',async(req,res)=>{
     let users=await userModel.find();
    res.send(users);
});
app.get('/update',async (req,res)=>{
    let updateduser=await userModel.findOneAndUpdate({name:"Shristi"},{age:20},{new:true})
    res.send(updateduser);
});
app.get('/delete',async (req,res)=>{
    let user=await userModel.findOneAndDelete({name:"Shristi"});
    res.send(user);
});


app.listen(3000,()=>{
    console.log("Server is running at port 3000");
});