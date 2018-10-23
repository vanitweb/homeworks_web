// Task_2. Reverse order
let str = "absdef";
let strRev = ""; 
for (i = str.length-1; i >= 0; i--) {
  strRev += str[i];
}
console.log (strRev);