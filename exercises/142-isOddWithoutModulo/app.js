function isOddWithoutModulo(num) {
    let division = num / 2; //divide number by 2
    let floored = Math.floor(division); //remove any remainder

    if(floored * 2 != num) return true; //if number without remainder is different from original number, then it must be odd
    else return false;
}

var output = isOddWithoutModulo(17);
console.log(output); // --> true