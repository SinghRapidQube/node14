var express = require('express');
var app = express();
var port = process.env.port || 9595;

app.get('/', function(req, resp){
    resp.send("welcome to Nodejs App on Horeku");
});

app.listen(port);