const express=require('express')
const app=express()
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

const users=["Deafult user"]
app.get('/',(req,res)=>
{
    let output=`<h1>Hello world!</h1>
    <form action="/create-user" method="post">
        <input type="text" name="username">
        <button type="submit">Submit</button>
    </form>`
    res.send(output)
})
app.get('/users',(req,res)=>
{
    let output="<ul>"
    for(const user of users) output+=`<li>${user}</li>`
    output+="</ul>"
    res.send(output)
})
app.post('/create-user',(req,res)=>
{
    console.log(req.body.username)
    res.send()
})
app.listen(3000)