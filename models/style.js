const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StyleSchema = new Schema({
  competition: { type: String, required: true },
  participants: { type: Number, min: 2, required: true },
  best_record: { type: String, required: false }
}, { _id: false });

StyleSchema.path('best_record').validate((str) => {
  return /(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)/.test(str);
}, "Time format most be HH:MM:ss");

// Export the schema
module.exports = StyleSchema;