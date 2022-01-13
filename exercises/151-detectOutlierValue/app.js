function detectOutlierValue(string) {
    let odds = [];
    let evens = [];
    let array = string.split(' ');
    let outlier;
    let outlierInd;

    for(const iterator of array) {
        if(iterator % 2 == 0) evens.push(iterator);
        else odds.push(iterator);
    }

    if(odds.length == 1) outlier = odds[0];
    else outlier = evens[0]; 
    
    return array.indexOf(outlier) + 1;
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // => 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  //=> 2