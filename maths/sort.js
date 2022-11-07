const arr = [10, 50, 100, 500, 0, 200];
var arr1 = [];

function sortIt() {
for (let i of arr) {


setTimeout(()=> {
	
arr1.push(i);
arr.splice(arr.indexOf(i), 1);
if(arr.length === 0){
	console.log(arr1);
}
}, i)
}}

sortIt();
