const express=require('express')
const app=express()
const path=require('path')

app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>
{
    res.sendFile(path.join(__dirname,'home.html'))
})
app.get('/users',(req,res)=>
{
    res.sendFile(path.join(__dirname,'users.html'))
})
app.listen(3000)