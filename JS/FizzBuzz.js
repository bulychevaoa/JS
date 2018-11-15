for (var i=1;i<100;i++){
var remainder3 = i%3;
var remainder5 = i%5;
var result = (remainder5 != 0)?(remainder3 != 0)?console.log(i):console.log("Fizz"):(remainder3 != 0)?console.log("Buzz"):console.log("FizzBuzz");
}