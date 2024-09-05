const mongoose = require('mongoose');
require('dotenv').config(); // Make sure to require dotenv to use .env variables

const connectDB = async () => {
    try {
        const dbUri = process.env.MONGODB_URI; // Retrieve the URI from environment variables
        if (!dbUri) {
            throw new Error('MongoDB URI is not defined');
        }
        await mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit the process with failure code
    }
};

module.exports = connectDB;
