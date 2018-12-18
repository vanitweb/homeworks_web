/* Գրել՝
֊ input էլեմենտ, որտեղ կարող ենք գրել էլեմենտի selector, 
֊ select/dropdown որը ունի հետևյալ option-ները
   1. ավելացնել ատրիբուտ -> ընտրելու դեպքում կհայտնվի 2 input, որոնցից մեկում կարող ենք գրել ատտրիբուտի անունը, մյուսում՝ արժեքը։
   2. փոխել պարունակությունը ֊> ընտրելու դեպքում կհայտնվի 1 input, որտեղ կարող ենք գրել էլեմենտի նոր պարունակությունը։
   3. ավելացնել էլեմենտ ֊> ընտրելու դեպքում կհայտնվի input, որտեղ կարող ենք գրել պարունակությունը, որը կավելանա էլեմենտին։
   4. տպել ատրիբուտները ֊> ընտրելու դեպքում կտպի էլեմենտի բոլոր ատրիբուտները
 
*1-3 տարբերակների համար կարող ենք ունենալ button, որի միջոցով կկատարվի տարբերակին համապատասխան գործողությունը։  */

const input = document.getElementsByTagName('input')[0];
const button = document.getElementsByTagName('button')[0];
let toMake1 = function() {
    const input1 = document.getElementsByTagName('input')[1];
    const input2 = document.getElementsByTagName('input')[2];
    input.setAttribute(input1.value, input2.value);
}
let toMake2 = function() {
    const input3 = document.getElementsByTagName('input')[3];
    input.value = input3.value;
}
//chi ashxatum
let toMake3 = function() {
    const input4 = document.getElementsByTagName('input')[4];
    input.value = input.value + input4.value;
}
function funOpt1() {
    const input1 = document.createElement('input');
    document.body.appendChild(input1);
    const input2 = document.createElement('input');
    document.body.appendChild(input2);
    input1.placeholder = "atributName";
    input2.placeholder = "atributValue";
    button.setAttribute('onclick', 'toMake1()');                               
}
function funOpt2() {
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.placeholder = "NewContent";
    button.setAttribute('onclick', 'toMake2()');
}
function funOpt3() {
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.placeholder = "addContent";
}
function funOpt4() {
    for(let i = 0; i < input.attributes.length; ++i) {
        console.log(input.attributes[i]);
    }
}

