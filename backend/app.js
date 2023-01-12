const express=require('express')
const app=express()
require('dotenv').config()
const bodyParser=require('body-parser')

app.use(express.json())
app.use((req,res,next)=>
{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,post,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next()
})

app.use('/admin',require('./routes/admin').router)
app.use('/shop',require('./routes/shop'))

app.listen(process.env.PORT,()=>console.log("app listening on port "+process.env.PORT))