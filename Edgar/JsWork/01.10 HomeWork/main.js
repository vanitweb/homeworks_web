/*Ֆունկցիա, որը տպում է 1-20 թվերը 5վ․ ընդհատումներով*/
let counter = 0;
let setI = setInterval(function check20() {
    counter += 1;	
	console.log(counter);
	if (counter >= 20) {
		clearInterval(setI);
		console.log("The end");
    }
}, 5000);
/* myInterval Ֆունկցիա*/
function testF(){
    console.log("My interval");
}
function myInterval(f, sec){
    setTimeout(f, sec);
    while(sec < 1e5)
        return myInterval(f, sec + 2000)
}
myInterval(testF, 2000);