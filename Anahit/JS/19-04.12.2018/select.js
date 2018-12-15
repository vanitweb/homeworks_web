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
const options = document.getElementsByTagName('option');
const div = document.getElementsByTagName('div')[0];
let toMake1 = function() {
    const input1 = document.getElementsByTagName('input')[1];
    const input2 = document.getElementsByTagName('input')[2];
    document.getElementsByTagName(input.value)[0].setAttribute(input1.value, input2.value);
}
let toMake2 = function() {
    const input1 = document.getElementsByTagName('input')[1];
    document.getElementsByTagName(input.value)[0].innerHTML = input1.value;
}
//chisht chi ashxatum
let toMake3 = function() {
    const input1 = document.getElementsByTagName('input')[1];
    document.getElementsByTagName(input.value)[0].innerHtml += input1.value;
}
options[0].onclick = function() {
    div.innerHTML = "";
    const input1 = document.createElement('input');
    div.appendChild(input1);
    const input2 = document.createElement('input');
    div.appendChild(input2);
    input1.placeholder = "atributName";
    input2.placeholder = "atributValue";
    button.setAttribute('onclick', 'toMake1()');                               
} 
options[1].onclick = function() {
    div.innerHTML = "";
    const input = document.createElement('input');
    div.appendChild(input);
    input.placeholder = "NewContent";
    button.setAttribute('onclick', 'toMake2()');
}
options[2].onclick = function() {
    div.innerHTML = "";
    const input = document.createElement('input');
    div.appendChild(input);
    input.placeholder = "addContent";
}
options[3].onclick =  function() {
    for(let i = 0; i < document.getElementsByTagName(input.value)[0].attributes.length; ++i) {
        console.log(document.getElementsByTagName(input.value)[0].attributes[i]);
    }
}

