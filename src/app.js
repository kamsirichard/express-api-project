const express = require('express');
const config = require('./config/config');

const app = express();

// Middleware
app.use(express.json());

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Express API!');
});

// Start the server
const port = config.port;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
