//Պարզ թվեր [0, n] միջակայքի
let n = 100;
console.log(`Պարզ թվերը [0, ${n}] միջակայքի՝\n2 \n3`)
for(let parz_tiv = 4; parz_tiv <= n; parz_tiv++){    
    for(var i = 2; i < parseInt(Math.sqrt(parz_tiv)) + 1; i++){
        if(parz_tiv % i === 0){
            break;
        }
    }
//    console.log(parz_tiv,i)
    if(i === parseInt(Math.sqrt(parz_tiv)) + 1){
        console.log(parz_tiv)
    }
    
}