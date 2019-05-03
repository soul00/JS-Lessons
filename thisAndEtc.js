//this и непрямой вызов объектов

// var greet = function(){
//         return "Hello my name is " + this.name;
//     }

// var person = {
//     name: "Soul",
//     greet: greet
// }

// var anotherPerson = {
//     name: "Bob",
//     greet: greet
// }

// console.log(person.greet());
// console.log(anotherPerson.greet());

var greet = function(greeting){
    return greeting + "My name is " + this.name;
}

var person = {
name: "Soul",
greet: greet
}

var anotherPerson = {
name: "Bob",
greet: greet
}

console.log(person.greet("Hi! "));
console.log(anotherPerson.greet.call(person, "Bonjour! "));
console.log(anotherPerson.greet.apply(person, ["Bonjour! "]));

var bound = greet.bind(anotherPerson);
console.log(bound("Hello there is  "));