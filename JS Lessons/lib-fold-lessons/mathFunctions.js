var n = 12.67;

// выводит количество 
console.log(n.toFixed(3)); // симолов после запятой
console.log(2 .toFixed(3));

console.log(n.toExponential(3)); // символы после точки
console.log(n.toPrecision(2));// округление, точность

// унарные операторы
console.log(+10);
console.log(-10);

//инкремет и декремент
var i = 10;
console.log(++i); //префиксный инкремент
console.log(i); // должно быть 10 
console.log(i++);// постфиксный 
console.log('i:', i);

//Math функции
console.log(Math.sqrt(25));
console.log(Math.pow(3,5));
console.log(Math.PI);
console.log(Math.E);
