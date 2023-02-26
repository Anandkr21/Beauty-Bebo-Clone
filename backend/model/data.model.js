const mongoose=require('mongoose')

const productSchema=mongoose.Schema({
    description:String,
    img:String,
    name:String,
    brand:String,
    category:String,
    price:Number
    
})

const postModel=mongoose.model('allproduct',productSchema)

module.exports={
    postModel
}
