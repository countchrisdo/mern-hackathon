const mongoose = require('mongoose');
// Ensure that the Category model is loaded into Mongoose (for populating Item queries)
require('./category');

const itemSchema = require('./itemSchema');

module.exports = mongoose.model('Item', itemSchema);