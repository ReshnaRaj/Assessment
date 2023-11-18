const express=require('express')
const app=express()
require("dotenv").config();
const cors=require('cors')
const dbConnection=require('./Connection/database')
const userrouter=require('./Routes/UserRoute')
app.use(cors({
    origin:['http://localhost:3000'],
    method:['GET','POST','DELETE','PUT'],
    credentials:true
}))
dbConnection();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',userrouter)
app.listen(4000,()=>{
    console.log("Server running at port 4000")
})