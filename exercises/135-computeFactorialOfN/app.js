function computeFactorialOfN(num) {
    console.log("num", num);
    if (num < 0) return -1; //If the number is less than 0, reject it.
    else if(num == 0) return 1; // If the number is 0, its factorial is 1.    
    else return (num * computeFactorialOfN(num-1)); // Otherwise, call the recursive procedure again
    
}

var output = computeFactorialOfN(3); console.log(output); // --> 6

var output = computeFactorialOfN(4); console.log(output); // --> 24