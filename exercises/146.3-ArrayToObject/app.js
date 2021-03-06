function transformEmployeeData(array) {
  let newArr = [];
  for(let i = 0; i < array.length; i++) {
    let obj = {}
    
    for(let j = 0; j < array[i].length; j++){
      obj[array[i][j][0]] = array[i][j][1]; 
    }
    
    newArr.push(obj);
  }
  
  return newArr;
}

console.log( transformEmployeeData(
[
  [
      ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
  ],
  [
      ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
  ]
]
));