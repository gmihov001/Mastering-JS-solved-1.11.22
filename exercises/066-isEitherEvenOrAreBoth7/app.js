function isEitherEvenOrAreBoth7(num1, num2) {
    let even = num1 % 2 == 0 || num2 % 2 == 0;
    let seven = num1 == 7 && num2 == 7;
    return even || seven;
}


var output = isEitherEvenOrAreBoth7(3, 7);
console.log(output); // --> false

var output = isEitherEvenOrAreBoth7(2, 3);
console.log(output);