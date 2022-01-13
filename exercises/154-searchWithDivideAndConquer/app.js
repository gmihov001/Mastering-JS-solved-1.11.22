function search(array, value) {
  let index = null;

  let nextArray = [...array];

  array.forEach(
    (num, ind) => {
      if(nextArray.length < 1) index = null;
      else if(nextArray.length == 1 && nextArray[0] == value) index = array.indexOf(nextArray[0]);
      else {
        let midpointInd = Math.floor(nextArray.length / 2);

        if(value > nextArray[midpointInd]) nextArray = nextArray.slice(midpointInd+1); 
        else nextArray = nextArray.slice(0, midpointInd);

      }
    }
  );
  
  return index;  
}

var arr = [1, 3, 16, 22, 31, 33, 34]
console.log(search(arr, 31)); // => 4
console.log(search(arr, 16));
console.log(search(arr, 34));
console.log(search(arr, 38));