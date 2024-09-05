// app.js
const express = require('express');
const connectDB = require('./config/db');
const swaggerDocs = require('./swagger/swagger');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
const internRoutes = require('./routes/internRoutes');
const performanceRoutes = require('./routes/performanceRoutes');
const taskRoutes = require('./routes/taskRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const authRoutes = require('./routes/authRoutes');

app.use('/api/interns', internRoutes);
app.use('/api/performance', performanceRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/auth', authRoutes);

// Swagger docs
swaggerDocs(app);

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
