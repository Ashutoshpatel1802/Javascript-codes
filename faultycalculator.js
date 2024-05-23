let x=Math.random()

if(x<0.1){
console.log("true")
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the first number: ', (num1) => {
  rl.question('Enter the second number: ', (num2) => {
  rl.question('Enter the operator: ', (operator) => {

    // Convert input strings to numbers
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    
    // Check if the input is valid numbers
    if (isNaN(num1) || isNaN(num2)) {
      console.log('Please enter valid numbers.');
      rl.close();
      return;
    }
    
    let result;
    // Perform the operation based on the operator entered
    switch(operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '**':
        result = num1 ** num2;
        break;
      case '/':
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          console.log('Cannot divide by zero.');
          rl.close();
          return;
        }
        break;
       case '*':
        result=num1 * num2;
        break;
      default:
        console.log('Invalid operator.');
        rl.close();
        return;
    }
     
      // Display the result
      console.log(`Result of ${num1} ${operator} ${num2} is: ${result}`);
    
    rl.close();
  });
});
});


}
else{
console.log("false")
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the first number: ', (num1) => {
  rl.question('Enter the second number: ', (num2) => {
  rl.question('Enter the operator: ', (operator) => {

    // Convert input strings to numbers
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    
    // Check if the input is valid numbers
    if (isNaN(num1) || isNaN(num2)) {
      console.log('Please enter valid numbers.');
      rl.close();
      return;
    }
    
    let result;
    // Perform the operation based on the operator entered
    switch(operator) {
      case '+':
        result = num1 - num2;
        break;
      case '-':
        if (num2 !== 0) {
            result = num1 / num2;
          } else {
            console.log('Cannot divide by zero.');
            rl.close();
            return;
          }
        break;
      case '**':
        result = num1 * num2;
        break;
      case '/':
        result= num1 ** num2;
        break;
       case '*':
        result=num1 + num2;
        break;
      default:
        console.log('Invalid operator.');
        rl.close();
        return;
    }
     
      // Display the result
      console.log(`Result of ${num1} ${operator} ${num2} is: ${result}`);
      console.log(`the value of random number is ${x}`)
    
    rl.close();
  });
});
});

}



