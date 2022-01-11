function joinThreeArrays(arr1, arr2, arr3) {
 let newArr = arr1.concat(arr2, arr3);
 return newArr;
}

var output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
console.log(output); 