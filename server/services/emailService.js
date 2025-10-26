import nodemailer from 'nodemailer';

// Create transporter
const createTransporter = () => {
  const config = {
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT || 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false // Set to true in production
    }
  };
  
  console.log('Email configuration:', {
    host: config.host,
    port: config.port,
    user: config.auth.user ? '*** configured ***' : '*** NOT CONFIGURED ***'
  });
  
  return nodemailer.createTransport(config);
};

// Send general contact email
const sendContactEmail = async (formData) => {
  try {
    const transporter = createTransporter();
    
    const { name, email, company, phone, subject, message, inquiryType } = formData;
    
    // Verify transporter configuration
    await transporter.verify();
    console.log('SMTP connection verified successfully');
    
    const mailOptions = {
      from: `"Powerlite Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER,
      replyTo: email, // Allow replying directly to the user who submitted the form
      subject: `[Powerlite Contact] ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <div>
          <strong>Message:</strong>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
        <hr>
        <p><em>This email was sent from the Powerlite website contact form.</em></p>
      `,
    };

    console.log('Sending contact email to:', mailOptions.to);
    const result = await transporter.sendMail(mailOptions);
    console.log('Contact email sent successfully:', result.messageId);
    return result;
  } catch (error) {
    console.error('Error in sendContactEmail:', error);
    
    // Provide more specific error messages
    if (error.code === 'EAUTH') {
      throw new Error('Invalid login: Please check your email credentials');
    } else if (error.code === 'ECONNREFUSED') {
      throw new Error('Connection refused: Please check your SMTP settings and network connection');
    } else if (error.code === 'ENOTFOUND') {
      throw new Error('Host not found: Please check your SMTP host setting');
    } else if (error.message.includes('timeout')) {
      throw new Error('Connection timeout: Please check your network connection');
    }
    
    throw new Error(`Failed to send contact email: ${error.message}`);
  }
};

// Send sales contact email
const sendSalesContactEmail = async (formData) => {
  try {
    const transporter = createTransporter();
    
    const { inquiryType, companyName, contactName, email, phone, country, message, preferredContact } = formData;
    
    // Verify transporter configuration
    await transporter.verify();
    console.log('SMTP connection verified successfully');
    
    const mailOptions = {
      from: `"Powerlite Sales" <${process.env.EMAIL_USER}>`,
      to: process.env.SALES_EMAIL || process.env.EMAIL_USER,
      replyTo: email, // Allow replying directly to the user who submitted the form
      subject: `[Powerlite Sales] ${inquiryType} - ${companyName}`,
      html: `
        <h2>New Sales Inquiry</h2>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Contact Name:</strong> ${contactName}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${country ? `<p><strong>Country:</strong> ${country}</p>` : ''}
        <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
        <p><strong>Preferred Contact Method:</strong> ${preferredContact}</p>
        <div>
          <strong>Message:</strong>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
        <hr>
        <p><em>This email was sent from the Powerlite website sales contact form.</em></p>
      `,
    };

    console.log('Sending sales email to:', mailOptions.to);
    const result = await transporter.sendMail(mailOptions);
    console.log('Sales email sent successfully:', result.messageId);
    return result;
  } catch (error) {
    console.error('Error in sendSalesContactEmail:', error);
    
    // Provide more specific error messages
    if (error.code === 'EAUTH') {
      throw new Error('Invalid login: Please check your email credentials');
    } else if (error.code === 'ECONNREFUSED') {
      throw new Error('Connection refused: Please check your SMTP settings and network connection');
    } else if (error.code === 'ENOTFOUND') {
      throw new Error('Host not found: Please check your SMTP host setting');
    } else if (error.message.includes('timeout')) {
      throw new Error('Connection timeout: Please check your network connection');
    }
    
    throw new Error(`Failed to send sales contact email: ${error.message}`);
  }
};

export { sendContactEmail, sendSalesContactEmail };