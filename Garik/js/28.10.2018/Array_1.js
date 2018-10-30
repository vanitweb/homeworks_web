////homework 1
function fun(tiv1, tiv2, interval){
    let arr = [];
    for(tiv1; tiv1 <= tiv2; tiv1 += interval){
        arr.push(tiv1);
    }
    console.log(`${interval}-ինտերվալով թվերը Array-ի մեջ ${arr}`);
    return arr;
}
let arr = fun(13,25,3);
function sum(){
    let a = 0;
    for(i in arr){
        a += arr[i];
    }
    console.log(`${arr} Array-ի մեջի անդամների գումարը = ${a}`);
}
arr;
sum()
//homework 2
function net(x){
    let qanak = 0;
    for(let n = 0; n < x.length; n++){
        for(let j = 0; j < x.length - n ; j++){
            if(x[n] === "<" && x[n+j +1] === "<" && x[n+j +2] === "<"){
                let g;
                for(g = 1; g < x.length - n; g++){
                    if(x[n + g] !== "-"){
                        break; 
                    }
//                    console.log(n,j)
                }
//                console.log(g,n,j)
                if(g + n === n + j +1){
                    qanak++;
                }
            }
        }
        for(let j = 1; j < x.length; j++){
            if(x[n] === ">" && x[n + 1] === ">" && x[n + 1 + j] === ">"){
                let g;
                for(g = 1; g < x.length -(n + 1); g++){
                    if(x[n + 1 + g] !== "-"){
                        break; 
                    }
//                    console.log(n+1,n+1+j,g)
                }
//                console.log(n+1,n+1+j,g)
                if(g + n +1 == n + j +1){
                    qanak++
                }
            }
        }

    }
    console.log(`${x} \nՆետերի քանակը = ${qanak}`)
}
net(">>-->--->>-><-->>--><<---<<")