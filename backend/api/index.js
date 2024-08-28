// Import required modules
const express = require('express'); // Express.js framework
const mongoose = require('mongoose'); // MongoDB ORM
const cors = require('cors'); // Enable CORS for cross-origin requests
const dotenv = require('dotenv'); // Load environment variables from .env file
const cardsRoute = require('../routes/cards'); // Import cards route

// Load environment variables from .env file
dotenv.config();

// Create an Express.js app instance
const app = express();

// Enable CORS for cross-origin requests
app.use(cors());

// Parse incoming requests with JSON payloads
app.use(express.json());

// Set the port number (default to 5000 if not set in environment variables)
const port = process.env.PORT || 5000;

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected')) // Log success message if connected
  .catch((err) => console.log('MongoDB connection error:', err)); // Log error message if connection fails

// Mount the cards route at /cards
app.use('/cards', cardsRoute);

// Define a simple route to test if the server is running
app.get('/ping', (req, res) => {
  res.send('Server is running');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});