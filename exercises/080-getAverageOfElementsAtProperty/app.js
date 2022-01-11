// Write your function here
const getAverageOfElementsAtProperty = (obj, key) => {
  if(!obj[key] || obj[key].length == 0) return 0;
  else if(!(key in obj)) return 0; 
  else if(!Array.isArray(obj[key])) return 0;
  else return obj[key].reduce((a, b) => a + b) / obj[key].length;
}

var obj = {
    key: [1, 2, 3]
  };

  var output = getAverageOfElementsAtProperty(obj, 'key');
  console.log(output); 