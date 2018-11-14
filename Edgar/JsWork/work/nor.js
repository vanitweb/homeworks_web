console.log("----------------------------------");
console.log(`1) ("Adsf rgtDsd sdrs Aewr.") => "adsf-rgtdsd-sdrs-aewr"`);
console.log("----------------------------------");

//1) string_concat("Adsf rgtDsd sdrs Aewr.") => "adsf-rgtdsd-sdrs-aewr"
let myStr = "Adsf rgtDsd sdrs Aewr.";

function changeStr(data) {
    let lower = data.toLowerCase();
    let g = lower.split(' ');
    console.log(g.join('-'));
}
changeStr(myStr);

console.log("----------------------------------");
console.log(`2) make_short("dbh ff sfs ds ehdtu", 3); => "dbh ff sfs"`);
console.log("----------------------------------");
// Ֆունկցիա makeShort, որը կրճատում է տրված String-ը 2-րդ արգումենտի երկարությամբ
let s = "Adse jdhf isdh Reh";

function makeShort(value, num = 3) {
    var splite = value.split(' ', num);
    var str = splite.join(', ');
    console.log(str);
}
makeShort(s);

console.log("----------------------------------");
console.log(`3.1)("ab abc ssjdf abk ab sfrkl", "ab"); => "ab" is found 4 times`);
console.log("----------------------------------");
/*3.1) find_matches_count("ab abc ssjdf abk ab sfrkl", "ab"); => "ab" is found 4 times KISAT!*/
let string2 = "ab abc ssjdf abk ab sfrkl";

function testReg(n, num) {
    var re = new RegExp(num, "ig");
    let coun = n.match(re);
    console.log(` "${num}" is found  ${coun.length} times `);
}
testReg(string2, 'ab');

console.log("----------------------------------");
console.log(`3.2)("ab abc ssjdf abk ab sfrkl", "ab"); => => "ab" is found 2 times`);
console.log("----------------------------------");

/*3.1) find_matches_count("ab abc ssjdf abk ab sfrkl", "ab"); => "ab" is found 2 times*/
// const str2 = "ab abc ssjdf abk ab sfrkl";
function testReg2(n, num) {
    let coun2 = n.match(/ab+\s/g);
    console.log(` "${num}" is found  ${coun2.length} times `);
}
testReg2(string2, 'ab');

console.log("----------------------------------");
console.log(`4)(15, 5[, '+']); => [+]00015`);
console.log("----------------------------------");
//4)(15, 5[, '+']); => [+]00015
function pad(num, size, operator) {
    var s = num + "";
    while (s.length < size) {
        s = "0" + s;
    }
    return (`[${operator}]${s}`);
}
console.log(pad(15, 5, '+'));

console.log("----------------------------------");
console.log(`5) find_palindrome_words("Hello! Aba kdfk ckkc skroekr ababa"); => "Aba", "ckkc", "ababa"`);
console.log("----------------------------------");
/*how to find palindrome words in javascript text
5)("Hello! Aba kdfk ckkc skroekr ababa"); => "Aba", "ckkc", "ababa"*/
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