function modulo(num1, num2) {
    let isNeg = false; //tracks if num1 is negative or positive
    if(Math.sign(num1) == -1) isNeg = true; //if num1 is neg, isNeg is true
    if(isNeg) num1 = Math.abs(num1); //if num1 is neg, convert to absolute (positive) 

    let division = num1 / num2;
    let floored = Math.floor(division);
    let withoutRemainder = floored * num2;
    let remainder = num1 - withoutRemainder;
    
    if(isNeg) return -Math.abs(remainder); //because num1 was negative, convert remainder to negative
    else return remainder;
}

var output = modulo(-100, 38);
console.log(output); 

console.log(100 % 38); //to cross check the results