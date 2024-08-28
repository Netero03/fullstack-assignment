// Import the Mongoose library
const mongoose = require('mongoose');

// Define a new Mongoose schema for the Card model
const CardSchema = new mongoose.Schema({
  // Define the title field
  title: {
    // Specify the data type as a string
    type: String,
    // Make the title field required
    required: true,
    // Ensure the title is unique across all documents
    unique: true
  },
  // Define the description field
  description: {
    // Specify the data type as a string
    type: String,
    // Make the description field required
    required: true
  }
});

// Export the Card model based on the defined schema
module.exports = mongoose.model('Card', CardSchema);