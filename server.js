'use strict'
// require express and body parser
const express = require('express');
const	app = express();
const	router = express.Router();
const	bodyParser = require('body-parser');

// body parser for JSON data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//DB REQUIRE
const db = require('./models');

app.use('/', (req,res) => {});

////////// API CALLS ////////////

// INDEX ALL TACOS
app.get('/api/list', (req, res) => {
	db.Taco.find()
	.exec((err, tacos) => {
		if(err){
			console.log('Getting Taco Error: ', err);
		}
		res.json(tacos);
	});
});

// SHOW TACO from List
app.get('/api/list/:id', (req, res) => {
	db.Taco.findOne({_id: req.params.id}, (err, data) => {
		if(err){
			console.log('Show Taco Error: ', err);
		}
		res.json(data);
	});
});

// POST TACO
app.post('/api/list', (req, res) => {
	let newTaco = new db.Taco({
		name: req.body.name,
		shell: req.body.shell,
		meat: req.body.meat,
		spicy: req.body.spicy,
		toppings: req.body.toppings,
		recipe: req.body.recipe,
		picture: req.body.picture
	});
	newTaco.save((err, taco) => {
		if(err) {
			console.log('New Taco Error: ', err);
		}
		res.json(taco);
	});
});

// DELETE TACO
app.delete('/api/list/:id', (req, res) => {
	db.Taco.remove({_id: req.body.id}, (err, deletedTaco) =>{
		if(err) {
			console.log('Delete Taco Error: ', err);
		}
		res.json('Deleted');
	});
});

// PUT TACO
app.put('/api/list/:id', (req, res) => {
	db.Taco.findOne({_id: req.params.id}, (err, foundTaco) => {
		if(err) {
			console.log('Update Taco Error: ', err);
		}
		foundTaco.name = req.params.name;
		foundTaco.shell = req.body.shell;
		foundTaco.meat = req.body.meat;
		foundTaco.spicy = req.body.spicy;
		foundTaco.toppings = req.body.toppings;
		foundTaco.recipe = req.body.recipe;
		foundTaco.picture = req.body.picture;
		foundTaco.save((err, taco) => {
			if(err) {
				console.log('Update Taco Save Error: ', err);
			}
			res.json(taco);
		});
	});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening at http://localhost:3000/');
});