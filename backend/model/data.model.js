const mongoose=require('mongoose')

const productSchema=mongoose.Schema({
    title:String,
    img:String,
    category:String,
    price:Number
})

const postModel= new mongoose.model('allproduct',productSchema)

module.exports={
    postModel
}
