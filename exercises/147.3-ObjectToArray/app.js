function convertObjectToList(object) {
  let newArr = [];
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = [key, object[key]];
      newArr.push(element);      
    }
  }
  return newArr;
}

console.log(convertObjectToList({
  name: 'Holly',
  age: 35,
  role: 'producer'
}));