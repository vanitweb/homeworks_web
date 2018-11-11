function rand(max) {
    let str = "";
    let str1 = "";
    for (var i = 48; i < 122; i++) {
        if (i >= 58 && i <= 65) continue;
        str += String.fromCharCode(i);
    }

    for (var i = 0; i < max; i++)
        str1 += str.charAt(Math.floor(Math.random() * str.length));
}
if (typeof str1.indexOf[0] !== "string" && typeof str1.indexOf[1] !== "string") {

}
return str1;
};
console.log(rand(12));


function slic(value) {
    var words = str.split(' ');
    console.log(words[value]);
}
let str = "es im anush Hayastani arev a ham bstr2 em sirum";
slic(3);

let str = "Ослик Иа-Иа посмотрел на виадук"; // ищем в этой строке
let target = "Иа"; // цель поиска

let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
    alert(pos);
}


let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let regexp = /[A-E]/gi;
let matches_str2ay = str.match(regexp);

console.log(matches_str2ay);