var mongoose=require('mongoose');

var Blog=require('../schema/blog');

module.exports=mongoose.model('blod',Blog)