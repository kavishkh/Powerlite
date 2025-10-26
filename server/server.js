import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' })); // Increase limit for larger forms

// Ensure all responses have proper headers
app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
});

// Import routes
import contactRoutes from './routes/contact.js';

// Routes
app.use('/api/contact', contactRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({ message: 'Server is running!' });
});

// Handle 404 for API routes
app.use('/api/', (req, res) => {
  res.status(404).json({ 
    message: 'API endpoint not found', 
    path: req.originalUrl 
  });
});

// Global error handling middleware
app.use((error, req, res, next) => {
  console.error('Global error handler:', error);
  
  // Ensure response is always JSON
  res.setHeader('Content-Type', 'application/json');
  
  // Handle different types of errors
  if (error.type === 'entity.parse.failed') {
    return res.status(400).json({ 
      message: 'Invalid JSON in request body',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
  
  res.status(500).json({ 
    message: 'Internal server error', 
    error: process.env.NODE_ENV === 'development' ? error.message : undefined 
  });
});

// Handle non-API routes (in case of misconfiguration)
app.use((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(404).json({ 
    message: 'Endpoint not found',
    path: req.originalUrl 
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});