'use strict'
var http = require('http');
var express = require('express');
var app = express();
var logger = require('morgan')

app.use(logger("short"))

app.use(function (req,res,next) {
	console.log(req.method+ '  '+ req.url);
	next();
	// body...
})

app.use('/re',function (req,res) {
	res.redirect('http://www.sina.com');
})

// app.use('/send',	 (req,res) {
// 	res.sendFile('package.json');
// 	// body...
// })

app.use('/',function (req,res) {

	res.end('Hello World!')
	// body...
});


http.createServer(app).listen(3000);

function test(argument) {
	// body...
}