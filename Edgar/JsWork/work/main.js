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
let words = str.split(' ');
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

/*let s = "Adse jdhf isdh Reh";
function makeShort(value, num = 3){
let splite = value.split(' ', num);
// let str = splite.join(', ');
console.log(splite);
}
makeShort(s);*/

// Ֆունկցիա makeShort, որը կրճատում է տրված String-ը 2-րդ արգումենտի երկարությամբ
/*const str2 = "Lorem ipsum dolor sit amet, consectetur ad ipisicing elit. Harum  debitis?";
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
const arr = [4, 87, 58, 59, 65, 5, 5, 2, 1, 5, 5, 3, 6, 9, 8, 9, 9, 9, 9, 9, 41, ];
let count, count1, sum, i, j;
let max = 0;
for (i in arr) {
    sum = 0;
    for (j of arr) {
        if (arr[i] === j) {
            sum++;
        }
        if (sum > max) {
            max = sum;
            count = i;
        }
        if (sum === max) {
            count1 = i;

        }
    }
}
console.log(`[${arr}] մասիվում`);
if (arr[count] !== arr[count1]) {
    console.log(`${arr[count]} եվ ${arr[count1]} թվերը հանդիպում են ${max} անգամ։`);
} else {
    console.log(`${arr[count]} թիվը հանդիպում է ${max} անգամ։`);
}*/

// let text1 = "Adsf rgtDsd sdrs Aewr";
// function makeShort2(value){
// let splite__2 = value.split(' ', num);
// let text3 = text1.concat(" - ",text2);
// console.log( text3);

// }
// function myFunction(data) {
//     let arr = data.split("-", 4);
//     let st = arr.join(' - ');
//     console.log(arr);
//     console.log(st);
    
// }
// myFunction(text1);


// Ֆունկցիա, concat "-"
/*let names = "Adsf rgtDsd sdrs Aewr.";
let arr = names.split(' ');
console.log("arr", arr);
let j = "";
for (var i = 0; i < arr.length; i++) {
  j= arr[i] + '-';
}
 console.log( j );*/