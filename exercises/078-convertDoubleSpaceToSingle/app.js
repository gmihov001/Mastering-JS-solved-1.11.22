function convertDoubleSpaceToSingle(str) {
    let words = str.split('  ');
    
    return words.join(' ');
}

var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"