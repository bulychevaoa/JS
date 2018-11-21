var arrayToList=(arr)=>{
var list = {value: arr[0] };
var list2 = list;
for(var i=1;i<arr.length;i++){
list2.next = {value: arr[i] }; 
list2 = list2.next;
}
return list;
}
console.log(arrayToList([10,20]));

var ListToarray=(list)=>{
var arr=[];
var i=0;
while(list!=null){
arr[i]=list.value;
i++;
list = list.next;
}
return arr;
}
console.log(ListToarray(arrayToList([10,20,30])));

var prepend=(a,list)=>{
var list1;
list1={value:a};
list1.next = list;
return list1;
}
console.log(prepend(20,null));
console.log(prepend(10,prepend(20,null)));

var number;
var nth=(list,b)=>{
var count=0;
number=list.value;
if (count!=b){
	list1=list.next;
	nth(list1,(b-1));
	}
return number;
}
console.log(nth(arrayToList([10,20,30]),1));