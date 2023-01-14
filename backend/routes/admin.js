const { postAddProduct } = require('../controllers/products')
const router=require('express').Router()

router.post('/add-product',postAddProduct)

module.exports=router