var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  var greeting = '';
	
  if(!(firstName in customerData)) {
    greeting = 'Welcome! Is this your first time?';
  } else {
    if(customerData[firstName].visits == 1) {
      greeting = `Welcome back, ${firstName}! We're glad you liked us the first time!`;
    } else if(customerData[firstName].visits > 1) {
      greeting = `Welcome back, ${firstName}! So glad to see you again!`;
    }  
    
  }
	
  return greeting;
}

var output = greetCustomer('Terrance');
console.log(output);

var output = greetCustomer('Joe');
console.log(output);

var output = greetCustomer('Carol');
console.log(output);