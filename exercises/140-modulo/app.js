function modulo(num1, num2) {
    
    let division = num1 / num2;
    let floored = Math.floor(division);
    let withoutRemainder = floored * num2;
    let remainder = num1 - withoutRemainder;
    if(Math.sign(num1) == -1) return -Math.abs(remainder);
    else return remainder;
}

var output = modulo(25, 4);
console.log(output); // --> 1

console.log(100 % 38); //to cross check the results