var n = 3;
// if 
if (n > 5) {
    console.log("n bigger than 5");
} else if (n < 5){
    console.log("n is less than 5");
} else {
    console.log("It`s impossible")
}

// switch case
switch (n) {
    case 3:
        console.log("Hello number 3!");
        break;
    case 4:
    console.log("Hello number 4!");
        break;
    case 2:
    console.log("Helo number 2!");
        break;
    default: console.log("number doesn`t exist in list!")
        break;
}

// Alternate condition
var x = 9;
var text = x > 10 ? "x больше десяти" : x < 10 ? "х меньше 10" : "x равно 10";
console.log(text);

// такая же инструкция
if (x > 10){
    text = "x больше 10"
}else if (x < 10){
    text = "x меньше 10"
} else {
    text = "x равно 10"
}
console.log(text);