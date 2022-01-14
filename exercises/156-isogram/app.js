function isIsogram(text) {
  // add each char to a set
  const mySet1 = new Set();
  for (const iterator of text) {
    mySet1.add(iterator);      
  }
  
  return(mySet1.size == text.length);
}

console.log(isIsogram("Camile")) // => true
console.log(isIsogram("Camille")) // => false