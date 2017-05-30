// 'use strict'
// // require express and body parser
// const express = require('express');
// const	app = express();
// const	router = express.Router();
// const	bodyParser = require('body-parser');
// const path = require('path');
// const morgan = require('morgan');
// const apiRouter = require('./routes/api');
// const DB = 'mongodb://localhost/tacos';
// const mongoose = require('mongoose');

// // CONNECT TO DB
// mongoose.connect(DB, (err) =>{
// 	if(err) {
// 		console.log('DB Connection Error');
// 	}
// 	console.log('Connected to: ', DB);
// });

// // body parser for JSON data middle ware
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(morgan('dev'));

// // API ROUTES
// app.get('/api', function api_index(req, res){
// 	res.json({
// 		message: "Welcome to Taco Tuesday!",
// 		endpoints: [
// 		{
// 			method: 'GET',
// 			path: '/api/random',
// 			description: 'Get a random taco'
// 		},
// 		{
// 			method: 'GET', 
// 			path: '/api/list', 
// 			description: "show list of tacos and homepage"
// 		},
// 		{
// 			method: 'POST',
// 			path: '/api/list',
// 			description: "Add a new taco"
// 		},
// 		{
// 			method: 'SHOW',
// 			path: '/api/list/:id',
// 			description: "Show individual taco"
// 		},
// 		{
// 			method: 'PUT',
// 			path: '/api/list/:id',
// 			description: "Update your taco"
// 		},
// 		{
// 			method: 'DELETE',
// 			path: '/api/list/:id',
// 			description: 'Delete your taco'
// 		}
// 		]
// 	});
// });


// //DB REQUIRE
// const db = require('./models');

// // Route for API
// app.use('/api', apiRouter);