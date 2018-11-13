//Կանչերի քանակ
var myFuncCalls = 0;
function myFunction(f1, count){
	count = 4;
    myFuncCalls++;
	if (myFuncCalls == count){
		console.log(f1());
	}  
	function f1(){
		console.log('Hellow world!!!')
	}
}
myFunction();
myFunction();
myFunction();
myFunction();
myFunction();

// 1-20 թվերը տպել 5 վրկ ընդմիջումով
function tpel() {
  let i = 1;
  let tp = setInterval(function() {
    console.log(i);
    if (i == 20) clearInterval(tp);
    i++;
  }, 5000);
}
tpel();


