 
require('dotenv').config();

const config = {
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || 'default_secret', // Replace with a secure key
};

module.exports = config;
