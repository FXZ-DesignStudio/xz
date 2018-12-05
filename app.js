//引入模块
const express = require ("express"); //express
const bodyParser = require ("body-parser");  //body-parser
const mypro = require ("./routes/mypro.js");  //引入mypor的路由
/*-----------------------------------------*/
//创建web服务器
var server = express();
//设置并监听服务器端口（3000）
server.listen (3000);
/*-----------------------------------------*/
//托管静态资源
server.use (express.static("mypro")); //mypro目录下
/*-----------------------------------------*/
//使用body-parser中间件将post请求数据解析为对象
//注意：一定要写在路由的前边
server.use (bodyParser.urlencoded({
  extended:false
}));
/*-----------------------------------------*/
//把ajax路由挂载
server.use ("/mypro",mypro)














