var express = require('express');
var router = express.Router();
var Blog = require('../model/Blog');

/* GET home page. */
//数据查询
router.get('/', function (req, res, next) {
    var search=req.query.search;
    var reg= new RegExp(search)
   Blog.find({user:reg}).then((data)=>{
       res.render('search.ejs',{lists:data})
   })
});
module.exports = router;