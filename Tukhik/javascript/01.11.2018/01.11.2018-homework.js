//arajadranq 1 --tpum e 1-ic 20 tvery 5 vayrkyan @ndmijumnerov
let count = 0;
function qayl(){
	if(count<20){
		count ++
		console.log(count)
	}	
}
setInterval(qayl, 5000);

//arajadran2 - my Setinterval grel
var mySetInterval = setTimeout(function hello() {
  console.log( "Hello" );
  mySetInterval = setTimeout(hello, 2000);
}, 2000)