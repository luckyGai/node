var express = require('express');
var router = express.Router();
var Blog = require('../model/Blog');

/* GET home page. */
//数据添加
router.get('/add', function (req, res, next) {
    console.log(req.query)
    Blog.findOne({user:req.query.user},function (err,data) {
        if(!err){
            if(data){
                res.json({code:1,msg:'该用户已存在'})
            }else{
                Blog.create({
                    user: req.query.user,
                    pass: req.query.pass,
                    tel: req.query.tel,
                    eml: req.query.eml
                }).then((data) => {
                    res.json({
                        code: 0,
                        msg: '添加成功'
                    });
                })
            }
        }
    })
    
});
// 数据删除
router.get('/del', function (req, res) {
    Blog.remove({
        _id: req.query.a
    }).then((data) => {
        res.redirect('/')
    })
})
//模态框修改
router.get('/update', function (req, res) {
    Blog.update({
        _id: req.query.id
    }, {
        $set: {
            user: req.query.user,
            pass: req.query.pass,
            eml: req.query.eml,
        }
    }).then((data)=>{
        res.json({code:0,msg:"修改成功"})
    })
})
module.exports = router;