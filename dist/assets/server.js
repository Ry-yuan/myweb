//使用express
var express = require('express');
var path = require('path');
//express 对象
var app = express();
//静态资源加载
app.use(express.static(path.join(__dirname, '/')));
//get方法获得请求
app.get('/', function(req, res) {
    //返回当前index
    res.sendFile(__dirname + "/index.html");
}).listen(80, function() {  //监听80端口
    console.log("web start at 80 port");
})
