function flipPairs(input){
    let newStr = '';
    if(input.length % 2 == 0) {
        for (let index = 1; index < input.length; index = index + 2) {
            newStr += (input.charAt(index) + input.charAt(index-1));
            
        }
    } else {
        for (let index = 1; index < input.length; index = index + 2) {
            newStr += (input.charAt(index) + input.charAt(index-1));
            
        }
        newStr += input.charAt(input.length-1);
    }    
    return newStr;
}

var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
