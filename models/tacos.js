'use strict'

const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

const TacoSchema = new Schema ({
	name: String,
	shell: String,
	meat: String,
	spicy: Boolean,
	toppings: String,
	recipe: String,
	picture: String
});

// Taco Model
const Taco = mongoose.model('Taco', TacoSchema);

// Export
module.exports = Taco;