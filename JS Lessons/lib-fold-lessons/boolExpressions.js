console.log(true);
console.log(false);

console.log('5 === 5:', 5 === 5);
console.log('5 === 6:', 5 === 6);

console.log('Boolean(5):', Boolean(5));

//Falsy values

console.log('Boolean(undefined):', Boolean(undefined));
console.log('Boolean(0):', Boolean(0));
console.log('Boolean(null):', Boolean(null));
console.log('Boolean(NaN):', Boolean(NaN));
console.log('Boolean(""):', Boolean(""));

var s = "Text";
if (s){
    console.log("Its true");
}

console.log('true && false:', true && false);
console.log('true && true:', true && true);
console.log('true || false:', true || false);
console.log('false || false:', false || false);
console.log('!true:', !true);
console.log('!false:', !false);

var a = 0
    isTrue = true; // can be false and a will be 0
isTrue && (a = 5);
console.log('a:', a);

var s = "Some non-empty string"// if empty newString = Default
var newString = s || "Default";
console.log('newString:', newString);
