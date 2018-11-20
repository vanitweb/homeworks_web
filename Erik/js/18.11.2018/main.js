      /*drakan tveri gumar*/

let array = [-1, 5, -8, 15];
let maqur = array.filter(function(arg) {
    return arg > 0;
  })
  let gumar = maqur.reduce(function(mek, erku) {
    return mek + erku;
  })
console.log(gumar);

          /*krknapatik*/


function fun(argum) {
let patasxan = argum.map(function (y) {
    return y * y;
  })
  console.log(patasxan);
}
fun([5, 66, 28, 64])


              /*chkrknvox  andamner@*/

// let a = [1, 2, 2];
// let b = [ 2, 2, 5];
// let concato = a.concat(b);
// console.log(concato);
// ans = concato.filter(function(item, pos) {
//     return concato.indexOf(item) == pos;
// })
// console.log(ans);
//
// var filtero = concato.filter(function(similar){
// for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++) {
//       if(a[i] === b[j]){
//         console.log()
//       }
//     }
//   }
//  })
// console.log(filtero);



let people = [
  {
    name: "Garnik",
    surname: "Garnikyan",
    age: 64,
    registration: 25,
  },
  {
    name: "Benjamin",
    surname: "Frangulyan",
    age: 21,
    registration: 1,
  },
  {
    name: "Kaytar",
    surname: "Mnacakanyan",
    age: 8,
    registration: 19,
  },
  {
    name: "Ruben",
    surname: "Ghambaryan",
    age: 87,
    registration: 17,
  },
];
console.log(people);

function short(masiv1, masiv2) {
  masiv1.sort(function (arg1, arg2) {
    if (arg1[masiv2] < arg2[masiv2]) {
      return -1;
    }else{
      return 1;
    }
  }),
  console.log(masiv1);
}
short(people,"surname");
