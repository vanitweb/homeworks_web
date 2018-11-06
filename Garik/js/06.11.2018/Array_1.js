//homework1
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
//homework2
function print(){console.log(12345)}
function func(f, n, c){
    let k = 0;
    function fun(k){
        setTimeout(f,k)
    }
    for(let i = 0; i < c; i++){
        k += n;
        fun(k)
    }
}
func(print, 1000, 30)