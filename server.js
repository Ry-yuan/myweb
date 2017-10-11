var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, '/')));
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
}).listen(80, function() {
    console.log("web start at 80 port");
})
