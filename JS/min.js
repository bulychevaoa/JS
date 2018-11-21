console.log("Глава: Функции");
alert("Write two numbers a and b for comparison");
var a = prompt("Write a = ",'');
var b = prompt("Write b = ",'');
var min=(a,b)=>{ return (a>b)? b:a;}
console.log(min(a,b));