'use strict'

var WEBPORT = 3000;
var express = require('express');
var app = express();
var apiV1 = require('./lib/apiversion1.js');
var apiV2 = require('./lib/apiversion2.js');

app.get('/random/:min/:max',function (req,res) {
	var min = parseInt(req.params.min,10);
	var max = parseInt(req.params.max,10);
	if (isNaN(min) || isNaN(max) || min>=max) {
		res.status(400);
		res.end('Error Number');
	}

	var result = Math.round(Math.random()*(max-min))+min;
 	
 	res.json({'result':result})
 	return;

});

app.use('/v1',apiV1);
app.use('/v2',apiV2);

app.listen(WEBPORT,function () {
	console.log("Serer running on port"+WEBPORT);
});

