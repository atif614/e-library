import express from "express";


const app = express();

app.get("/",(req,res,next)=>{
   res.json({messaage:"MY first api"})                         
})

export default app;

