'use strict'

var express = require('express');
// var app = express();

var api = express.Router() ;
api.get ('/random',function(req,res){
	res.status(200);
	res.end("Version 2");
})

module.exports = api;