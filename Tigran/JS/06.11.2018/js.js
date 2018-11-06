//                1 ic 20 tvery
function rt(tiv,minchev) {
	let a = setInterval(function(){
		if (tiv <= minchev) {
			console.log(tiv);
		}else{
			clearInterval(a);
		}
		tiv++;
	}, 100);

}
rt(1,20);

//                  set interval

function func(f,jamanak,hat){
    let k = 0;
    for(let i = 0; i < hat; i++){
        k += jamanak;
        fun(k);
    }
    function fun(k){
        setTimeout(f,k);
    }
}
func(rt(1,3),1000,7);











