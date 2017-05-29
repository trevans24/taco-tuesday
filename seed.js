'use strict'

// REQUIRE DB
const db = require('./models');

let tacoList = [
{
	name: "Beef Taco Boats",
	shell: "Hard",
	meat: "Beef",
	spicy: false,
	toppings: "Rice, Beans, Cheese, Avocado, Guac, Pico, Sour Cream, Shredded Lettuce",
	recipe: "http://www.delish.com/cooking/recipe-ideas/recipes/a53019/beef-taco-boats-recipe/",
	picture: "http://www.delish.com/cooking/recipe-ideas/recipes/a53019/beef-taco-boats-recipe/?zoomable"
},
{
	name: "Jamaican Jerk Steak Tacos",
	shell: "Soft",
	meat: "Steak",
	spicy: false,
	toppings: "Pineapple, Onion, Cilantro, Avocado, Cotija Cheese",
	recipe: "http://www.delish.com/cooking/recipe-ideas/recipes/a52048/jamaican-jerk-steak-tacos-recipe/",
	picture: "http://www.delish.com/cooking/recipe-ideas/recipes/a52048/jamaican-jerk-steak-tacos-recipe/?zoomable"
},
{
	name: "Cheesy Chicken Tacos",
	shell: "Hard",
	meat: "Chicken",
	spicy: true,
	toppings: "Beans, Salsa, Pepperjack Cheese, Cilantro",
	recipe: "http://www.delish.com/cooking/recipe-ideas/recipes/a50265/cheesy-baked-tacos-recipe/",
	picture: "http://www.delish.com/cooking/recipe-ideas/recipes/a50265/cheesy-baked-tacos-recipe/?zoomable"
},
{
	name: "Sriracha Shrimp Tacos",
	shell: "Soft",
	meat: "Shrimp",
	spicy: true,
	toppings: "Purple Cabbage, Cilantro, Sour Cream, Lime",
	recipe: "http://www.delish.com/cooking/recipe-ideas/recipes/a49994/sriracha-shrimp-tacos-recipe/",
	picture: "http://www.delish.com/cooking/recipe-ideas/recipes/a49994/sriracha-shrimp-tacos-recipe/?zoomable"
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