function findPairForSum(array, number){
    let nums = [];
    for (const element of array) {
        if(nums.length < 2){
            if(number - element > 0 && array.includes(number - element)) {
                nums.push(element);
                nums.push(number - element);
            }
        }
                
    }
    return nums;
}

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]

var pair = findPairForSum([1, 2, 3, 4, 5], 7);
console.log(pair);

//test does not pass because test is wrong on second call 