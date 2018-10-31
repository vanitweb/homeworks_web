// ֆունկցիա, որը հաշվում է տրված թիվ-արգումենտների գումարը և միգին թվաբանականը։ 
console.log("Home work 1");
function numb() {
    function numMid(n) {
        let k = n.arguments.length;
        return count / k;
    }
    let i;
    let count = 0;
    for (i = 0; i < arguments.length; i++) {
        count += arguments[i];
    }
    return (`Գումարը հավասար է - ${count}, \nՄիջին տվաբանականը ~ ${Math.round(numMid(numb))}`);

}
console.log(numb(5, 5, 10, 20, 14, 58, 7, 4));
// ֆունկցիա, որը ստանալով 2 թիվ, վարկյանների նշված տարբերությամբ արտածում է նրանց գումարը, տարբերությունը, եվ բաժանումը  
console.log("---------------------------");
console.log("Home work 3");
function mainF(a, b) {
    setTimeout(function counter() {
        console.log(a + b);
    }, 5000);
    setTimeout(function counter() {
        console.log(a - b);
    }, 6000);
    setTimeout(function counter() {
        console.log(a / b);
    }, 4000);
    return (`Start:\nFirst number is: ${a}\nSecond number is: ${b}`);
}
console.log(mainF(56, 10));