# Powerlite Backend Server

This directory contains the backend server for handling contact form submissions using NodeMailer.

## Setup Instructions

1. **Environment Variables**: 
   Create a `.env` file in the root directory with the following variables:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   CONTACT_EMAIL=contact@powerlite.com
   SALES_EMAIL=sales@powerlite.com
   PORT=3001
   ```

2. **Gmail Setup** (if using Gmail):
   - Enable 2-factor authentication on your Google account
   - Generate an App Password for use with EMAIL_PASS
   - Use your Gmail address for EMAIL_USER

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Run the Server**:
   ```bash
   # Development mode with auto-restart
   npm run dev:server
   
   # Production mode
   npm run server
   ```

## API Endpoints

- `POST /api/contact/general` - Submit general contact form
- `POST /api/contact/sales` - Submit sales contact form
- `GET /api/health` - Health check endpoint

## Frontend Integration

The frontend forms in `/src/pages/Contact.tsx` and `/src/pages/ContactSales.tsx` are already configured to communicate with these endpoints.

## Testing

To test the email functionality:
1. Start the server: `npm run dev:server`
2. Fill out either contact form on the frontend
3. Check the server console for any errors
4. Check your email inbox for the received message