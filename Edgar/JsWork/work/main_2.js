// how to find palindrome words in javascript text
let sentence = "Hello! Aba kdfk ckkc skroekr ababa";
function main(value) {
    let c = value.split(" ");
    for (var i = 0; i < c.length; i++) {
        checkPalindrom(c[i]);
    }
}
function checkPalindrom(str) {
    let r = str.toLowerCase();
    if (r == r.split('').reverse().join('')) {
        console.log(r);
    }
}
main(sentence);



