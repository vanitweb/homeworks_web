//homework1
function make_flat(arg){
    let a;
    let x = 0;
    for(let i of arg){
        if(Array.isArray(i)){
            a = arg.flat();
            make_flat(i);
        }
    }
    console.log(a)
}
make_flat([1, [2], [4, [5, [3,[5,[8]]]]]])
console.log([1, [2], [4, [5, [3,[5,[8]]]]]].flat(5))
//homework2
function sum(arg){
    console.log(arg.filter(function(a){return a > 0}).reduce(function(a,b){return a + b}))
}
sum([1, 2, -4, 5, -3])
//homework3
 function map(arg){
     console.log(arg.map(function(x){return x * x}))
 }
map([1, 2, -4, 5, -3])
//homework4
let arr = [
    {
        anun: "Bjlkdsdsf", 
        azganun: "Bjlkdsdsf",
        tariq: 25,
        grancman_or: "07.11.2018",
    },
    {
        anun: "Gjlkdsdsf", 
        azganun: "Jjlkdsdsf",
        tariq: 18,
        grancman_or: "18.01.2008", 
    },
    {
        anun: "Ajlkdsdsf", 
        azganun: "Ojlkdsdsf",
        tariq: 61,
        grancman_or: "27.07.2013", 
    }
]
function fun(x,y){
    x.sort(function(a,b){
        if(a[y] < b[y]){
            return -1
        }else{
            return 1
        }
    });
    console.log(x)
}
fun(arr,"tariq")
//homework5
function chkrknvox(a,b){
    for(let i in a){
        for(let j in b){
            if(a[i] === b[j]){
                a.splice(i,1);
                b.splice(i,1);
            } 
        }
    }
    let c = a.concat(b);
    console.log(c)
}
chkrknvox([1, 5 ,8 ,7 ,9, 11], [13, 7 ,28 ,1 ,9, 5])