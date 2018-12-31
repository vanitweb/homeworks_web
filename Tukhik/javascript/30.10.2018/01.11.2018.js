
function F1(num) {
  return function f2() { 
       return ++num;
                }
}
let f3 = F1(4);
console.log(f3());
console.log(f3());
console.log(f3());
console.log(f3());

let f3= function(){
    console.log ("hello world");
}
function F1() {
    let num = 0;
  return function f2(f3, count) {
       ++num;
      if (count == num) {
         f3();
      }
  }
}
let f4 = F1();
console.log(f4(f3, 4));
console.log(f4(f3, 4));
console.log(f4(f3, 4));
console.log(f4(f3, 4));
console.log(f4(f3, 4));
