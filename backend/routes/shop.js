const router=require('express').Router()
const {products}=require('./admin')

router.get('/',(req,res)=>
{
    // console.log(products)
    res.send(JSON.stringify(products))
})

module.exports=router