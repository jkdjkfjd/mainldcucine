const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

// Route files
const teamRoutes = require('./routes/teamRoutes');
const enquiryRoutes = require('./routes/enquiryRoutes');
const galleryRoutes = require('./routes/galleryRoutes');
const beforeAfterRoutes = require('./routes/beforeAfterRoutes');

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));

// Mount routes
app.use('/api/team', teamRoutes);
app.use('/api/enquiries', enquiryRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/before-after', beforeAfterRoutes);

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ 
    message: 'LD Cucine API is running', 
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || 'Something went wrong!',
    stack: process.env.NODE_ENV === 'development' ? err.stack : {}
  });
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`❌ Error: ${err.message}`);
  server.close(() => process.exit(1));
});