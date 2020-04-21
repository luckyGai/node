var express = require('express');
var router = express.Router();
var Blog=require('../model/Blog');

/* GET home page. */
// 搜索数据接口
router.get('/', function(req, res, next) {
  Blog.find({}).then((data)=>{
    res.render('index', { list:data });
  })
});

module.exports = router;
