/*Ֆունկցիա, որը տպում է 1-20 թվերը 5վ․ ընդհատումներով*/
let counter = 0;
let setI = setInterval(function check20() {
    counter += 1;	
	console.log(counter);
	if (counter >= 20) {
		clearInterval(setI);
		console.log("The end");
    }
}, 1000);

/*anather*/
function fun(k, n){
    let a = setInterval(function(){
        if(k <= n){
            console.log(k);
        }else{
            clearInterval(a);
        }
        k++;
    },5000)
}
fun(1, 20)

// myInterval Ֆունկցիա
function testF(){
    console.log("My interval");
}
function myInterval(f, sec){
    setTimeout(f, sec);
    while(sec < 1e5)
        return myInterval(f, sec + 2000)
}
myInterval(testF, 2000);


