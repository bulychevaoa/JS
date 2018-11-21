function reverseArray(mass){
var mass1 = [];
for(var i=mass.length-1;i>=0;i--){
mass1[mass.length-i-1]=mass[i];}
return mass1;
}
console.log(reverseArray(["A","B","C"]));

var arr=[1,2,3,4,5]
function reverseArrayInPlace(arr){
var mass2 = [];
for(var i=arr.length-1;i>=0;i--){
mass2[arr.length-i-1]=arr[i];}
return mass2;
}
console.log(reverseArrayInPlace(arr));

/*более эффективный
var arr=[1,2,3,4,5]
arr.reverseArrayInPlace=function(){
var mass2 = [];
for(var i=this.length-1;i>=0;i--){
mass2[this.length-i-1]=this[i];}
return mass2;
}
console.log(arr.reverseArrayInPlace());
*/
