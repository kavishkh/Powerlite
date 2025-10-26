const { testContactData, testSalesData } = require('./email.test');

async function testAPI() {
  console.log('Testing API endpoints...');
  
  try {
    // Test general contact endpoint
    console.log('Testing general contact endpoint...');
    const contactResponse = await fetch('http://localhost:3001/api/contact/general', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testContactData),
    });
    
    const contactResult = await contactResponse.json();
    console.log('General contact response:', contactResult);
    
    if (contactResponse.ok) {
      console.log('✓ General contact API test passed!');
    } else {
      console.log('✗ General contact API test failed:', contactResult.message);
    }
  } catch (error) {
    console.log('✗ General contact API test error:', error.message);
  }
  
  try {
    // Test sales contact endpoint
    console.log('Testing sales contact endpoint...');
    const salesResponse = await fetch('http://localhost:3001/api/contact/sales', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testSalesData),
    });
    
    const salesResult = await salesResponse.json();
    console.log('Sales contact response:', salesResult);
    
    if (salesResponse.ok) {
      console.log('✓ Sales contact API test passed!');
    } else {
      console.log('✗ Sales contact API test failed:', salesResult.message);
    }
  } catch (error) {
    console.log('✗ Sales contact API test error:', error.message);
  }
}

// Run the tests if this file is executed directly
if (require.main === module) {
  testAPI();
}

module.exports = { testAPI };