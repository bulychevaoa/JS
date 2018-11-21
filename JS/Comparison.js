var obj={here:{is:"an"},object:2};
var deepEqual=(a,b)=>{
if((a&&b)!=null){
	if (((typeof a)&&(typeof b))=="object") {
		for (var part in a) {
		if (b.hasOwnProperty(part))
        return deepEqual(a[part], b[part]);
		}
	}
	else{
	if(a===b) {return true;}
	else {return false;}
}
}else {return true;}
}
console.log(deepEqual(obj,obj));
console.log(deepEqual(obj,{here:1,object:2}));
console.log(deepEqual(obj,{here:{is:"an"},object:2})); 