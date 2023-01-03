const express=require('express')
const app=express()

const users=["Deafult user"]
app.get('/',(req,res)=>
{
    let output=`<h1>Hello world!</h1>`
    res.send(output)
})
app.get('/users',(req,res)=>
{
    let output="<ul>"
    for(const user of users) output+=`<li>${user}</li>`
    output+="</ul>"
    res.send(output)
})
app.listen(3000)