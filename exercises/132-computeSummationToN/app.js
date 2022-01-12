function computeSummationToN(n) {
    let sum = 0;
    for (let index = 1; index <= n; index++) {
        sum += index;        
    }
    return sum;
}

var output = computeSummationToN(6);
console.log(output); // --> 21