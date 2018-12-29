const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StyleSchema = new Schema({
  participants: { type: Number, min: 0, required: true },
  distance: { type: Number, min: 0, required: true },
  best_time: { type: String, required: false }
}, { _id: false });

StyleSchema.path('best_time').validate((str) => {
  return /(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)/.test(str);
}, "Time format most be HH:MM:ss");

// Export the schema
module.exports = StyleSchema;