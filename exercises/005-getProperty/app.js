function getProperty(obj, key) {
  return obj[key] ? obj[key] : undefined;
}

var car = {
  model: 'Toyota'
};

var output = getProperty(car, 'model');
console.log(output);