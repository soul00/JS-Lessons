// Конструкторы и классы

var Person, person, secondPerson, Developer, developer;

Person = function(name){
    this.name = name;
}

Person.prototype.greet = function(){
    console.log("hello my name is " + this.name)
}

// конструкторы
person = new Person("Jack");
console.log(person.name);
person.greet();

secondPerson = new Person("Bob");
console.log(secondPerson.name)
secondPerson.greet()
console.log("")

Developer = function(name, skills){
    Person.apply(this, arguments);
    this.skills = skills || [];
}

Developer.prototype = Object.create(Person.prototype);
Developer.prototype.condtructor = Developer;

developer = new Developer("Brad", ["php","html","css"]);
console.log(developer.name);
console.log(developer.skills);
developer.greet();

console.log(developer instanceof Developer);
console.log(developer instanceof Person);
