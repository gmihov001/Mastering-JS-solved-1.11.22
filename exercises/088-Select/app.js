// Write your function here

const select = (arr, obj) => {
    let newObj = {};
    arr.forEach((key)=>{
        if(key in obj) newObj[key] = obj[key];
    });

    return newObj;
}

var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

var output = select(arr, obj);
console.log(output); 