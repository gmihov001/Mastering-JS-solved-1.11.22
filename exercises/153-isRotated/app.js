function isRotated(str1, str2) {
    let notInclude = 0;
    for (let index = 0; index < str1.length; index++) {
        if(!(str2.includes(str1.charAt(index)))) notInclude += 1;     
    }
    if(notInclude > 0) return false;
    else return true;
}

console.log(isRotated('hello world', 'orldhello w')) // => true
console.log(isRotated('hello world', 'omrel wp')) // => false