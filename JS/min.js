alert("Write two numbers a and b for comparison");
var a = prompt("Write a = ",'');
var b = prompt("Write b = ",'');
function min(a,b){ return (a>b)? b:a;}
document.write(min(a,b));