//console.log("server start")
import express from "express";
import morgan from 'morgan';
const port =process.env.Port||3000

const port=process
const app=express();
let user=[];
app.use.morgan('short');
app.use(express.json());
app.use((req,res,next)=>{
    console.log("the request Came",req.body)
    next();

})

app.use((req,res,next)=>{
    console.log("the request Came",Date.now())
    next();

})
app.get("/users",(req,res ) => {
    res.send (users);
})

app.get("/user/id",(req,res ) => {
    if (users[req.params.id]){
        res.send(users[req.params.id])
    } else{
     res.send("user not found")
    }
})

app.post("/user",(req,res ) => {
    if(!req.body.name||!req.body.email||!req.body.address){
         res.status(400).send("invalid data");

    }else{
        user.push({
            name:req.body.name,
            email:req.body.email,
            address:req.body.address
        })
    }
})

app.listen(3000,()=>{
    console.log('server is running on port 3000')

})