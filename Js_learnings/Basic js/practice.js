const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter the number: ", (userInput) => {
    let number = parseInt(userInput); 
    let fac = 1; 
    for(let i = 1; i <= number; i++) { 
        fac = fac * i;
    }
    console.log(`Factorial of ${number} is: ${fac}`);
    readline.close();
});
