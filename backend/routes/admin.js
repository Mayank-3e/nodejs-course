const router=require('express').Router()

const products=[]
router.post('/add-product',(req,res)=>
{
    products.push(req.body)
    res.send()
})

module.exports={router,products}