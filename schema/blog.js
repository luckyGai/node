var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var blogSchema=new Schema({
    user:String,
    pass:String,
    tel:String,
    eml:String
})
module.exports=blogSchema;