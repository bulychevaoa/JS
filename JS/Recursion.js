var N = prompt("Write N = ",'');
var k = Math.abs(N);
function Recursia(k)
{
	return(k == 0)?0:1;
	if((k!=0)&&(k!=1)) return Recursia(k-2);
}
console.log(Recursia(k));