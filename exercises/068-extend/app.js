var obj1 = {
    a: 1,
    b: 2
};
var obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    for(let key in obj2){
        if(!(key in obj1)) obj1[key] = obj2[key]; 
    }
}

extend(obj1, obj2);


console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2);