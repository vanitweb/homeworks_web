// arajadranq - XXXnn_xxxnn.... tesqi patahakan tveri u tareri sharq grel
function regExp(arg){
    let reg = /^(([A-Z]{1,3}$)?(([A-Z]{3})([0-9]{1,2})$)?(([A-Z]{3})([0-9]{2})[-])?(([a-z]{1,3}$)?(([a-z]{3})([0-9]{1,2})$)?(([a-z]{3})([0-9]{2})[-])?)+)$/;
    let result = reg.test(arg);
    console.log(result)
}
regExp("AGA11-aaa45-a")

// //exec() ,  match()  indexOf    lastIndexOf()  findIndex()

// let text = 'ghgh{ghghgh  [hjhjhdjd (ghgh) ]jkjkjk }';
// function isPrime(element, index, array) {
//  for(let i = 0; n < text.lenght; i++){
//  	i
//  }
//   while (start <= Math.sqrt(element)) {
//     if (element % start++ < 1) {
//       return false;
//     }
//   }
//   return element > 1;
// }
// console.log(text.findIndex('{'));

