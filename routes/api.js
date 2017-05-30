'use strict'
const express = require('express');
const router = express.Router();
const Model = require('../models/tacos.js');

////////// API CALLS ////////////

// RANDOM TACO
router.get('/random', (req, res) => {
	Model.find({}, (err, taco) => {
		if(err) {
			res.send(err).status(404);
		}
		res.send(taco).status(200);
	});
});


// INDEX ALL TACOS
router.get('/list', (req, res) => {
	Model.find({}, (err, taco) => {
		if(err) {
			res.send(err).status(404);
		}
		res.send(taco).status(200);
	});
	// db.Taco.find()
	// .exec((err, tacos) => {
	// 	if(err){
	// 		console.log('Getting Taco Error: ', err);
	// 	}
	// 	res.json(tacos);
	// });
});

// SHOW TACO from List
// router.get('/list/:id', (req, res, next) => {
// 	db.Taco.findOne({_id: req.params.id}, (err, data) => {
// 		if(err){
// 			console.log('Show Taco Error: ', err);
// 		}
// 		res.json(data);
// 	});
// });

// POST TACO
router.post('/list', (req, res) => {
	let newTaco = new Model({
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
			res.send(console.log('New Taco Error: ', err)).status(501);
		}
		res.json(taco).status(201);
	});
});

// DELETE TACO
// router.delete('/list/:id', (req, res, next) => {
// 	db.Taco.remove({_id: req.body.id}, (err, deletedTaco) =>{
// 		if(err) {
// 			console.log('Delete Taco Error: ', err);
// 		}
// 		res.json('Deleted');
// 	});
// });

// PUT TACO
// router.put('/list/:id', (req, res, next) => {
// 	db.Taco.findOne({_id: req.params.id}, (err, foundTaco) => {
// 		if(err) {
// 			console.log('Update Taco Error: ', err);
// 		}
// 		foundTaco.name = req.params.name;
// 		foundTaco.shell = req.body.shell;
// 		foundTaco.meat = req.body.meat;
// 		foundTaco.spicy = req.body.spicy;
// 		foundTaco.toppings = req.body.toppings;
// 		foundTaco.recipe = req.body.recipe;
// 		foundTaco.picture = req.body.picture;
// 		foundTaco.save((err, taco) => {
// 			if(err) {
// 				console.log('Update Taco Save Error: ', err);
// 			}
// 			res.json(taco);
// 		});
// 	});
// });


module.exports = router;