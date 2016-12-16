'use strict'

var express = require('express');
var app = express();
var logger = require('morgan');
var url_parser = require('url_parser');

app.use(logger('default'));

app.use(function (req,res,next) {
	res.write(req.url)
	next();
})

app.use('/',function (req,res) {
	res.end('Hello World');
});



app.listen(3000);



