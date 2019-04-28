//Простые типы
var myNumeber = 4335,
myString = "Hello World!",
myBool = true,
myNull = null,
myUndef = undefined;

console.log(typeof myString);
console.log(typeof myNumeber);
console.log(typeof myBool);
console.log(typeof myNull);
console.log(typeof myUndef);

//Объектные типы
var obj = {name: soul},
    array = [1,2,3],
    regexp = /w+/g,
    func = function(){};

    console.log("");
console.log(typeof obj);
console.log(typeof array);
console.log(typeof regexp);
console.log(typeof func);

obj.name = "new name";
array[1] = 512451;

console.log(array);

console.log(myString.toUpperCase());
console.log(myString);

var a, b ,c, d;

a = b = c = d = 5;//справа на лево