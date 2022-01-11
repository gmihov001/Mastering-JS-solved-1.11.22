function countNumberOfKeys(obj) {
    var size = Object.keys(obj).length;
    return size;
}

var obj = {
    a: 1,
    b: 2,
    c: 3
  };

var output = countNumberOfKeys(obj);
console.log(output);