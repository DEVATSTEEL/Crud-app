const mongoose=require('mongoose')


const Liblary=new mongoose.Schema({
_id:mongoose.Schema.Types.ObjectId,
Name:String,
Price:Number,
Description:String,

},{timestamps:true})


module.exports=mongoose.model('Books',Liblary)

