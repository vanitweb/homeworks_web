let str = 'abna bnm';
let c = str.split("");
let count = {};
for(let i = 0;i < c.length; i++ ){
	if(count[c[i]] === undefined){
		count[c[i]] = 0;
	}
	count[c[i]]++;
}
for(let j in count){
	console.log(j + ' = ' + count[j]);
	
}
function myFname(){
	console.log(myFname.name);
}
myFname();

function mainF(a, ob1,ob2,ob3){
let sum = ob1 + ob2 + ob3;
	return a(sum);
}
function a(x){
 console.log( x );	
	}
mainF(a,5,5,5);