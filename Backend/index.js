const express=require('express')
const port=5000
const app=express()
const mongodb=require('./db')
const cors = require("cors")
const dburl = "mongodb+srv://viwin:viwin@cluster0.d61viun.mongodb.net/Food?retryWrites=true&w=majority"

mongodb(dburl)
app.use(cors())
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin',"http://localhost:3000")
    res.header("Access-Control-allow-headers",
    "Origin,X-Requested with,Content-Type,accept")
    next()
})
app.use(express.json())
app.use('/api',require('./Routes/CreateUser'))
app.use('/displaydata',require('./Routes/Displaydata'))

app.get('/',(req,res)=>{
    res.send(`Hello`)
})

app.listen(port,()=>{
    console.log(`listening to port ${port}`)
})

 
