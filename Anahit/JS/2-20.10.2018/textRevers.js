//1.տեքստի շրջման խնդիր

let string = "abcde";
let string1 = "";
console.log(`ունեցած տեքստն է ${string}`);
for( let i = string.length - 1; i >= 0; i--){
    string1 += string[i];
}
console.log(`շրջված տեքստը կլինի ${string1}`);

