const express=require('express')
const app=express()
const path=require('path')
const bodyParser=require('body-parser')

app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine','pug')

const users=[]
app.get('/',(req,res)=>
{
    res.render('home',{title: 'Form'})
})
app.get('/users',(req,res)=>
{
    res.render('users',{title: 'Users',users: users})
})
app.post('/create-user',(req,res)=>
{
    users.push(req.body.username)
    res.redirect('/users')
})

app.use((req,res)=>res.send("404 Not found"))
app.listen(3000)