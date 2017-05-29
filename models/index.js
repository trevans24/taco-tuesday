'use strict'

// Require Mongoose
const mongoose = require('mongoose');

// DB Connect
mongoose.connect(process.env.MONGODB_URI ||
								process.env.MONGOLAB_URI ||
								process.env.MONOGOHQ_URL ||
								'mongodb://localhost/tacos'
								);

// EXPORT TACO
module.exports.Taco = require('./tacos.js');