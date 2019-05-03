// урок по объектам

// {
//     имя: значение,
//     имя: значение,
//     имя: значение,
// }

var person = {//объектный литерал
    name: "Soulless",
    age: 20,
    gender: "male",
    sayHi: function(){
        return "hello";
    }
}// Property Accept Ecpression

// выражение.идентификатор
console.log(person.name);
console.log(person.age);

// выражение [идентификатор]
console.log(person ["gender"]);

person.age = 25;
person.userID = 564982;

console.log(person);
console.log(person.sayHi());

//////////////////////

var object = new Object();
object.property = "value";

console.log("object.property:", object.property);
object.property

//////////////////////

var object2 = Object.create({x: 10, y: 20, z: 30});
console.log(object2.x);
console.log(object2.y);
console.log(object2.z);

console.log(object2);
// delete выражение
object2.x = 5.34;
console.log("object2.HasOwnProperty():", object2.hasOwnProperty("x"));

console.log(object2);
delete object2.x;
// результат
console.log(object2);
//////////////////////
//////////////////////
console.log(object2.o);
console.log("o" in object2);

object2.o = undefined;
console.log(object2.o);
console.log("o" in object2);
/////////////////////
