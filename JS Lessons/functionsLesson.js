function greet(name){
    return "Hello " + name;
}

var greet = function(name){
    console.log('arguments:', arguments.length);
    return "Your name is " + name;
};// инструкция обьявления с инициализацией
//функции в javascript являются обьектами

console.log(greet("Katis", 23 ,234).toUpperCase());

// очень непонятно
var func = function(callback){
    var name = "Soul";
    callback(name);
};

func(function(n){
    console.log(("Hello " + n).toLowerCase());
})

// фуннкция как возвращаемое значение
var func1 = function(){
    return function(){
        console.log("Hi");
    }
};

func1()();// анонимная функция