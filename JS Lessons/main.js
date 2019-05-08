// arrays

var months = ["March", "April", "May", "June"];

months[4] = "Fabruary";

// console.log(months);
// console.log(months.length);

// months[months.length] = "January";
// console.log(months);
// console.log(months.length);

months[20] = "September"; // разреженный массив Sparse array
// console.log(months);
// console.log(months.length);

months["someProperty"] = "someValue";
console.log(months);

// months.length = 3; удаление строк из массива
// console.log(months);

// delete months[3];
// console.log(months);
// console.log(months[3]); // удаление присваивает строке значение undefined


console.log(Array.isArray(months));


////////////////////////////////////////////////////////////////

// методы работы с массивами

var array = ["some string", "another string", "third string"]

// console.log(array.join(" || ")); // переводит в строку и разделяет
// console.log(array.reverse()); // изменяет массив начальный 

console.log(array.sort()); // по умолчанию по алфавиту сотировка
console.log(array.concat("Hello",["One string", "Two string"]));
console.log(array.slice(1));
