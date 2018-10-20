let a1 = 0,
    n = 7,
    sn;
for(let i = 0; i <= n; i++){
    a1 += i;
}
sn = a1/(n+1);
console.log(`Mijin tvabanakan@ ${sn}-n e`)

function fun(a1, an){
    sn = (a1 + an)/2 ;
    console.log(`Mijin tvabanakan@ ${sn}-n e`)
}
fun(0, 7)


let f1 = 0,
    f2 = 1,
    f3;
console.log(`fibonacci numbers \n${f1} \n${f2}`)
for(let fn = 0; ;fn++){
    fn = f1 +f2;
    f1 = f2;
    f2 = fn;
    if(fn >= 200){
        break;
    }
    console.log(fn)
}