// Обработка исключений
// урок по throw и try/ catch/ finally

// throw "Hello"

// var myError = new Error("Mesaage about error...")
// console.log(myError.name);
// console.log("myError.message:", myError.message);
// throw myError;

var calculate = function(n){
    if (n > 10) throw new Error("N should be less than 10");
    return n + 10;
}
// calculate(11);

// try {
//     инстуркция 
// } catch (идентификатор) {
//     инстуркция
// }finally{
//     инстуркция
// }

try {
    calculate(20);
} catch (error) {
    console.log("Can`t execute function calculate: " + error.message);
}