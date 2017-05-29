'use strict'

// REQUIRE DB
const db = require('./models');

const tacoList = [
{
	name: "",
	shell: "",
	meat: "",
	spicy: ,
	toppings: "",
	recipe: "",
	picture: ""
}
];

db.Taco.remove({}, (err, taco) => {
	console.log('Removing Tacos');
	db.Taco.create(tacoList, (err,tacos) => {
		if(err){
			console.log('DB Creation Error: ', err);
		}
		console.log('Created Tacos');
		process.exit();
	});
});