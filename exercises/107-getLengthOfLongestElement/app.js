function getLengthOfLongestElement(arr) {
    let longest = '';
    if(arr.length == 0) return 0;
    else {
        arr.forEach(word => {
            if(word.length > longest.length) longest = word;
        });    
        return longest.length;
    }
    
}

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); 