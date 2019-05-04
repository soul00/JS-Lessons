// аксессоры 

var person = {
    name: "Soul",
    inAge: 20,
    get age(){
        return this.inAge;
    },
    set age(value){
        this.inAge = value < 0 ? 0 : value > 122 ? 122: value;
    }
};

console.log("person.age:", person.age);
person.age = 230;
console.log("person.age:", person.age);
person.age = -12;
console.log("person.age:", person.age);

//свойства имеют атрибуты

// writable enumerable configurable

console.log(Object.getOwnPropertyDescriptor(person, "name"));
console.log(Object.getOwnPropertyDescriptor(person, "age"));

Object.defineProperty(person, "gender", {
    value: "male",
    writable: false,
    enumerable: true,
    configurable: false
});
console.log("person.gender:", person.gender);
person.gender = "female";// не сработало так как writable отключен
console.log("person.gender:", person.gender);

console.log("");
console.log("");

for (property in person){// выводит gender если enumerable = true
    console.log(property);
}