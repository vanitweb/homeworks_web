//1) string_concat("Adsf rgtDsd sdrs Aewr.") => "adsf-rgtdsd-sdrs-aewr"
let myStr = "Adsf rgtDsd sdrs Aewr.";

function changeStr(data) {
    let lower = data.toLowerCase();
    let g = lower.split(' ');
    console.log(g.join('-'));
}
changeStr(myStr);

/*3.1) find_matches_count("ab abc ssjdf abk ab sfrkl", "ab"); => "ab" is found 4 times KISAT!*/
let string2 = "Lorem ipsum dolor ad sit amet, consectetur ad ipisicing AD elit. Harum  addebitis?";

function test(n, num) {
    var r = new RegExp(/ad/gi);
    let coun = n.match(r);
    console.log(` is found  times ${coun.length}`);
}
test(string2);

//4)(15, 5[, '+']); => [+]00015
function pad(num, size, strg) {
    var s = num + "";
    while (s.length < size) {
        s = "0" + s;
    }
    return (`[${strg}]${s}`);
}
console.log(pad(15, 5, '+'));

// Ֆունկցիա makeShort, որը կրճատում է տրված String-ը 2-րդ արգումենտի երկարությամբ
let s = "Adse jdhf isdh Reh";

function makeShort(value, num = 3) {
    var splite = value.split(' ', num);
    var str = splite.join(', ');
    console.log(str);
}
makeShort(s);

// Ֆունկցիա makeShort, որը կրճատում է տրված String-ը 2-րդ արգումենտի երկարությամբ KISAT!
const str2 = "Lorem ipsum dolor sit amet, consectetur ad ipisicing elit. Harum  debitis?";

function testInput(args, str) {
    let midstring, count = 0;
    if (str.search(args) != -1) {
        midstring = ' պարունակում է ';
        count = str.search(args);
    } else {
        midstring = ' չի պարունակում ';
    }
    console.log(`Նախադասությունուը ${midstring} ${args} ${count}`);
}
let args = "ad";
testInput(args, str2);