/*Первая часть задания*/
var str = prompt("Write some word =",'');
var l=str.length;
var countsBs=(str)=>{
	for(var i=0;i<l;i++){
	str.charAt(i);
	}
return i;
}
console.log(countsBs(str));
/*Вторая часть задания*/
var B = prompt("Write element for reserch = ",'');
var k=0;
var elem;
var countChar=(str,B)=>{
	for(i=0;i<l;i++){	
		if(elem == B) return B;
		else{elem=str.charAt(i);}
		k++;
	}
}
console.log(countChar(str,B)+" in "+k+" place");