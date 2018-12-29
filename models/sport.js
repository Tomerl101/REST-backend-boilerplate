const mongoose = require('mongoose');
const StyleSchema = require('./style');
const Schema = mongoose.Schema;

let SportSchema = new Schema({
  id: { type: Number, min: 0, required: true },
  name: { type: String, required: true, max: 100 },
  style: StyleSchema
});

// Export the model
module.exports = mongoose.model('Sport', SportSchema);