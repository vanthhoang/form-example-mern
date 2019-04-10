const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const FormSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Form = mongoose.model('form', FormSchema); // a model that takes in a name and a schema. Model needs to know what the schema is 