function getStringLength(string) {
    let length = 0;
    for(const iterator of string) {
        length += 1;
    }
    return length;
}

var output = getStringLength('hello');
console.log(output); // --> 5