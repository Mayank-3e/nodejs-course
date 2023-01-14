const Product = require("../models/product")

exports.postAddProduct=(req,res,next)=>
{
    const product = new Product(req.body.title)
    product.save()
    res.send()
}

exports.getProducts=(req,res,next)=>
{
    res.send(JSON.stringify(Product.fetchAll()))
}