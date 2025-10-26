import express from 'express';
const router = express.Router();
import { sendContactEmail, sendSalesContactEmail } from '../services/emailService.js';

// Helper function to ensure JSON responses
const sendJsonResponse = (res, status, data) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(status).json(data);
};

// Global error handler for this router
router.use((error, req, res, next) => {
  console.error('Router error:', error);
  sendJsonResponse(res, 500, { 
    message: 'Internal server error. Please try again later.',
    error: process.env.NODE_ENV === 'development' ? error.message : undefined
  });
});

// Contact form endpoint
router.post('/general', async (req, res) => {
  try {
    console.log('Received general contact form submission:', req.body);
    const { name, email, company, phone, subject, message, inquiryType } = req.body;
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      console.log('Missing required fields:', { name: !!name, email: !!email, subject: !!subject, message: !!message });
      return sendJsonResponse(res, 400, { 
        message: 'Missing required fields: name, email, subject, and message are required' 
      });
    }

    // Send email
    await sendContactEmail({
      name,
      email,
      company,
      phone,
      subject,
      message,
      inquiryType
    });

    console.log('General contact email sent successfully');
    sendJsonResponse(res, 200, { message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending contact email:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send message. Please try again later.';
    
    if (error.message.includes('Invalid login')) {
      errorMessage = 'Email authentication failed. Please check your email configuration.';
    } else if (error.message.includes('ENOTFOUND') || error.message.includes('ECONNREFUSED')) {
      errorMessage = 'Network connection error. Please check your internet connection and SMTP settings.';
    } else if (error.message.includes('timeout')) {
      errorMessage = 'Connection timeout. Please check your network connection.';
    }
    
    sendJsonResponse(res, 500, { 
      message: errorMessage, 
      error: process.env.NODE_ENV === 'development' ? error.message : undefined 
    });
  }
});

// Contact Sales endpoint
router.post('/sales', async (req, res) => {
  try {
    console.log('Received sales contact form submission:', req.body);
    const { inquiryType, companyName, contactName, email, phone, country, message, preferredContact } = req.body;
    
    // Validate required fields
    if (!inquiryType || !companyName || !contactName || !email || !message) {
      console.log('Missing required sales fields:', { 
        inquiryType: !!inquiryType, 
        companyName: !!companyName, 
        contactName: !!contactName, 
        email: !!email, 
        message: !!message 
      });
      return sendJsonResponse(res, 400, { 
        message: 'Missing required fields: inquiryType, companyName, contactName, email, and message are required' 
      });
    }

    // Send email
    await sendSalesContactEmail({
      inquiryType,
      companyName,
      contactName,
      email,
      phone,
      country,
      message,
      preferredContact
    });

    console.log('Sales contact email sent successfully');
    sendJsonResponse(res, 200, { message: 'Sales inquiry sent successfully!' });
  } catch (error) {
    console.error('Error sending sales contact email:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send sales inquiry. Please try again later.';
    
    if (error.message.includes('Invalid login')) {
      errorMessage = 'Email authentication failed. Please check your email configuration.';
    } else if (error.message.includes('ENOTFOUND') || error.message.includes('ECONNREFUSED')) {
      errorMessage = 'Network connection error. Please check your internet connection and SMTP settings.';
    } else if (error.message.includes('timeout')) {
      errorMessage = 'Connection timeout. Please check your network connection.';
    }
    
    sendJsonResponse(res, 500, { 
      message: errorMessage, 
      error: process.env.NODE_ENV === 'development' ? error.message : undefined 
    });
  }
});

export default router;