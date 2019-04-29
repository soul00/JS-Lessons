// замыкание
var counter = function (){
    var count =0;
    return function(num){
        count = num !== undefined ? num : count;
        return count++;
    }
}()

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter(200));
console.log(counter());
console.log(counter());
console.log(counter());

// var counter = function(){
//     counter.count = num !== undefined ? num : counter.count;
//     return counter.count++;
// }
// counter.count = 0;