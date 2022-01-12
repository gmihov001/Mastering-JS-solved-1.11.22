function multiply(num1, num2) {
    console.log(`1 / ${num2} = `, 1/num2);
    console.log(`${num1} / (1 / ${num2}) = `, num1 / (1/num2));
    return Math.round(num1 / (1/num2));
}

var output = multiply(4, 7);
console.log(output); // --> 28