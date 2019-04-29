// for(;;) console.log("hi"); бесконечное выполнение

var i;
for ( i=0 ;i < 10; i++){
    console.log("For = " + i);
}

var i1;
for(i1 =10; i1--;){
    console.log("Decrement For = " + i1)
}

var s = 10;
while (s--){
    console.log("Decrement While = " + s);
}


var s1 = 0;
while (s1 < 10){
    console.log("Increment While = " + s1++);
}

var d = 0;
do console.log(d++); while (d<10);