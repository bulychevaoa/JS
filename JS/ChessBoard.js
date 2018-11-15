<script> 
alert('Write dimension of board K x N =','');
var k = prompt('Write dimension K =','');
var n =	prompt('Write dimension N =','');
var Arr =[];

for (var j=1;(j<=n);j++){
Arr+="#"+" ";
}

for (var i=1;(i<=k);i++){
var even = i%2;
(even==0)?console.log(" "+Arr):console.log(Arr);
}
</script>