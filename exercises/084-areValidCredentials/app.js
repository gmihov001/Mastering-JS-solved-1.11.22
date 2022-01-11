// Write your function here
const areValidCredentials = (name, pw) => name.length > 3 && pw.length >= 8;

var output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output);