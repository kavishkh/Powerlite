// Simple test script to verify email functionality
import { sendContactEmail, sendSalesContactEmail } from '../services/emailService.js';

// Test data for general contact
const testContactData = {
  name: 'Test User',
  email: 'test@example.com',
  company: 'Test Company',
  phone: '123-456-7890',
  subject: 'Test Contact Form Submission',
  message: 'This is a test message from the contact form.\n\nIt has multiple lines.',
  inquiryType: 'general'
};

// Test data for sales contact
const testSalesData = {
  inquiryType: 'Product Information',
  companyName: 'Test Corp',
  contactName: 'Test Sales Contact',
  email: 'sales-test@example.com',
  phone: '098-765-4321',
  country: 'United States',
  message: 'This is a test sales inquiry.\n\nIt also has multiple lines.',
  preferredContact: 'email'
};

async function testEmails() {
  console.log('Testing email functionality...');
  
  try {
    console.log('Sending test contact email...');
    await sendContactEmail(testContactData);
    console.log('✓ Contact email sent successfully!');
  } catch (error) {
    console.error('✗ Error sending contact email:', error.message);
  }
  
  try {
    console.log('Sending test sales email...');
    await sendSalesContactEmail(testSalesData);
    console.log('✓ Sales email sent successfully!');
  } catch (error) {
    console.error('✗ Error sending sales email:', error.message);
  }
}

// Run the tests directly
testEmails();

export { testContactData, testSalesData };