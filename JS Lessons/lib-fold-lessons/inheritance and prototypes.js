// Прототипирование и наследование

// это слишком много кода:

// var person = {
//     name: "John",
//     age: 20,
//     gender: "male",
//     greet: function(){
//         return "Hello my name is " + this.name;
//     }
// }
// var secondPerson = {
//     name: "Jessi",
//     age: 30,
//     gender: "female",
//     greet: function(){
//         return "Hello my name is " + this.name;
//     }
// }
// var thirdPerson = {
//     name: "Bard",
//     age: 25,
//     gender: "male",
//     greet: function(){
//         return "Hello my name is " + this.name;
//     }
// }

// Создем прототип

var Person = {
    // создадим метод condtructor
    constructor: function(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
        return this;
    },
    greet: function(){
        console.log("Hello my name is " + this.name);
    }
}

// Реализация 

// var personn, secondPerson, thirdPerson;
// person = Object.create(Person).constructor("John", 20, "male")
// secondPerson = Object.create(Person).constructor("Bruce", 30, "male")
// thirdPerson = Object.create(Person).constructor("Jessi", 23, "female")

// console.log(person.name);
// console.log(secondPerson.name)
// console.log(thirdPerson.gender);

// console.log(person.greet())
// console.log(thirdPerson.greet())
// console.log(secondPerson.greet())

// !!! объектно ориентированое програмирование - наследование !!!
var WebDeveloper = Object.create(Person);
WebDeveloper.constructor = function(name, age, gender, skills){
    Person.constructor.apply(this, arguments);
    this.skills = skills || [];
    return this;
}
WebDeveloper.develop = function(){
    console.log("Working...");
}

var developer = Object.create(WebDeveloper).constructor("John", 20, "male", 
["php","html","css","sql"]);
console.log(developer.skills);
console.log(developer);
developer.develop();
developer.greet();