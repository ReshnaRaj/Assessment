const express=require('express')
const app=express()
const cors=require('cors')
const dbConnection=require('./Connection/database')
app.use(cors({
    origin:['http://localhost:3000'],
    method:['GET','POST','DELETE','PUT'],
    credentials:true
}))
dbConnection();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.listen(4000,()=>{
    console.log("Server running at port 4000")
})