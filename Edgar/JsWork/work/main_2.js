/*inch vor kod, stugel pakagcery, stugel bolor {}() bacvox pakvox pakagcery, ete stringi meja */
let str = "dsds(cjsdb jdcjbIBC SDDK)BK{Hajastan aselis}aa[array,sasdodsi]sdsasd sa";

function mainCheck(n, n1, n2) {
    let count1, count2;
    if (n.indexOf(n1) !== -1 && n.indexOf(n2) !== -1) {
        count1 = n.lastIndexOf(n1);
        count2 = n.lastIndexOf(n2);
    } else {
        return (`not '${n1}' or '${n2}'`);
    }
    let r1 = n.substring(0, count2) + n.slice(count1 + 1);
    return ("r1", r1);
}
console.log(mainCheck(str, ")", "("));
/*
let regex1 = RegExp("[^A-Za-z0-9_,\.& ]", 'g');
let array1;

while ((array1 = regex1.exec(str)) !== null) {
<<<<<<< HEAD

  console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);
  // expected output: "Found foo. Next starts at 9."
  // expected output: "Found foo. Next starts at 19."
=======
    console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);
>>>>>>> 5a8e357074592abce64b7291da76f752b73f463d
}
console.log(array1);*/
function regExp(arg){
    let reg = /^([A-Z]){1,3}$)?$/;
    let result = reg.test(arg);
    console.log(result)
}
regExp("dGd90-abs66-")