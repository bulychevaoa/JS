console.log("Глава: Структуры данных. Объекты и массивы");
var start = prompt("Start with =",'');
var finish = prompt("Finish on =",'');
var mass=[];
function range(b,e){
	for(var i=1;i<=e;i++){
	mass.push(i);
	}
return mass;
}
console.log(range(start,finish));
//Дополненная range из третьей части задания
/*var l=prompt("Write step = ",'');
var step = Math.abs(l);
function range(b,e,s){
	for(var i=1;i<=e;i++){
	mass.push(i);
	i+=(s-1);
	}
return mass;
}
console.log(range(start,finish,step));
*/
var elem=0;
function sum(mass){
	for(var i=0;i<finish;i++){
	elem+=mass[i];
	}
return elem;
}
console.log(sum(mass));