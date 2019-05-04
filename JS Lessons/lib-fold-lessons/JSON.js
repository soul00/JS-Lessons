// JSON
// Сериализация объектов
// stringify перевод объекта в строку
// parse перевод строки в объект

var user = {
    name: "Peter",
    id: 1241242,
    lastVisit: Date.now(),
    friends: [234234,320498,23684],
    toJSON: function(){
        return {
            name: this.name,// фильтрация
            lastVisit: this.lastVisit// фильтрация
        }
    }
}

var userData = JSON.stringify(user);
console.log(userData);

console.log(JSON.parse(userData));