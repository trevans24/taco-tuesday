'use strict'
// require express and body parser
const express = require('express'),
	app = express(),
	router = express.Router(),
	bodyParser = require('body-parser');

// body parser for JSON data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//DB REQUIRE
const db = require('./models/');

////////// API CALLS ////////////

// INDEX ALL TACOS
app.get('/list', (req, res) => {
	db.Taco.find()
	.exec((err, tacos) => {
		if(err){
			console.log('Getting Taco Error: ', err);
		}
		res.json(tacos);
	});
});

// SHOW TACO from List
app.get('/list/:id', (req, res) => {
	db.Taco.findOne({_id: req.params.id}, (err, data) => {
		if(err){
			console.log('Show Taco Error: ', err);
		}
		res.json(data);
	});
});

