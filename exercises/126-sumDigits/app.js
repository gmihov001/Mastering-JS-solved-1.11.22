function sumDigits(num) {
    let digits = num.toString();
    let sum = 0;
    for(let i = 0; i < digits.length; i++) {
        if(i == 0 && digits.charAt(i) == '-' ) sum += 0;
        else if(i-1 == 0 && digits.charAt(i-1) == '-') sum -= parseInt(digits.charAt(i));
        else sum += parseInt(digits.charAt(i));
    }
    return sum;
}

var output = sumDigits(-316);
console.log(output); 