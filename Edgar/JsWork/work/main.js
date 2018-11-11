/*function rand(max){
   let str =  "";
    let str1 = "";
  for (var i = 48; i < 122; i++){
      if(i >= 58 && i<= 65) continue;
    str += String.fromCharCode(i);
  }
   
  for (var i = 0; i < max; i++)
    str1 += str.charAt(Math.floor(Math.random() * str.length));
  }
  if(typeof str1.indexOf[0]  !== "string" && typeof str1.indexOf[1]  !== "string"){
      
  }
  return str1;
};
console.log(rand(12));*/

/*function slic(value){
var words = str.split(' ');
console.log(words[value]);
}
let str = "es im anush Hayastani arev a ham bstr2 em sirum";
slic(3);*/



/*var str = "Ослик Иа-Иа посмотрел на виадук"; // ищем в этой строке
var target = "Иа"; // цель поиска

var pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  alert( pos );
}*/

/*
ar str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var regexp = /[A-E]/gi;
var matches_str2ay = str.match(regexp);

console.log(matches_str2ay);*/

// Ֆունկցիա makeShort, որը կրճատում է տրված String-ը 2-րդ արգումենտի երկարությամբ
let s = "Adse jdhf isdh Reh";
function makeShort(value, num = 3){
var splite = value.split(' ', num);
var str = splite.join(', ');
console.log(str);
}
makeShort(s);
// Ֆունկցիա makeShort, որը կրճատում է տրված String-ը 2-րդ արգումենտի երկարությամբ
const str2 = "Lorem ipsum dolor sit amet, consectetur ad ipisicing elit. Harum  debitis?";
function testInput(args, str) {
  let midstring,count = 0;
  if (str.search(args) != -1) {
    midstring = ' պարունակում է ';
    count = str.search(args);
  } else {
    midstring = ' չի պարունակում ';
  }
  console.log(`Նախադասությունուը ${midstring} ${args} ${count} `);
}
let args ="ad";

testInput(args, str2);