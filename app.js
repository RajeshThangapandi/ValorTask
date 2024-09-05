const express = require('express');
const app = express();
const connectDB = require('./config/db');
const internRoutes = require('./routes/internRoutes');
const performanceRoutes = require('./routes/performanceRoutes');
const taskRoutes = require('./routes/taskRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const authRoutes = require('./routes/authRoutes');

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Use routes
app.use('/api/intern', internRoutes);
app.use('/api/performance', performanceRoutes);
app.use('/api/task', taskRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
