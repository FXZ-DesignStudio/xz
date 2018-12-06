//引入上一级目录下的mysql模块
const pool = require('../pool.js');
const express = require('express');
const bodyParser = require('body-parser');
//创建空路由器
var router = express.Router();

//添加路由器
router.post ("/login",(req,res)=>{
	//获取用户名密码
	var $uname = req.body.uname;
	var $upwd = req.body.upwd;
	console.log($uname,$upwd)
	if (!$uname) {
		res,send("请输入用户名");
		return;
	}
	if (!$upwd) {
		res.send("请输入输入密码");
		return;
	}
	var sql = "select * from xz_user where uname = ? and upwd=?";
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if (err) throw err;
		console.log(result)//检查masql值是否正常
		//如果result.length大于0遍
		if (result.length>0) {
			res.send(result)
		}else{
			res.send("对不起！登录失败！！");
		}
	})
})






//导出路由器
module.exports=router;