//Ֆիբոնաչիի թվեր [0, n] միջակայքի
let f1 = 0,
    f2 = 1,
    n = 200;
console.log(`Ֆիբոնաչիի թվեր [0, ${n}] միջակայքի\` \n${f1} \n${f2}`)
for(let fibonacci = 0; f1 + f2 <= n; fibonacci++){
    fibonacci = f1 +f2;
    f1 = f2;
    f2 = fibonacci;
    console.log(fibonacci)
}