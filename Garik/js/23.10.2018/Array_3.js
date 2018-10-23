//revers
let bar = "abcd1234";
let tars = "";
for(let i in bar){
    tars += bar[bar.length-1-i]
}
console.log(tars)