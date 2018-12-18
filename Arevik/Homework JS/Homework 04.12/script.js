//Homework
 /*Գրել՝
֊ input էլեմենտ, որտեղ կարող ենք գրել էլեմենտի selector, 
֊ select/dropdown որը ունի հետևյալ option-ները
   1. ավելացնել ատրիբուտ -> ընտրելու դեպքում կհայտնվի 2 input, որոնցից մեկում կարող ենք գրել ատտրիբուտի անունը, մյուսում՝ արժեքը։
   2. փոխել պարունակությունը ֊> ընտրելու դեպքում կհայտնվի 1 input, որտեղ կարող ենք գրել էլեմենտի նոր պարունակությունը։
   3. ավելացնել էլեմենտ ֊> ընտրելու դեպքում կհայտնվի input, որտեղ կարող ենք գրել պարունակությունը, որը կավելանա էլեմենտին։
   4. տպել ատրիբուտները ֊> ընտրելու դեպքում կտպի էլեմենտի բոլոր ատրիբուտները
 
*1-3 տարբերակների համար կարող ենք ունենալ button, որի միջոցով կկատարվի տարբերակին համապատասխան գործողությունը։*/
let inputs = document.getElementsByTagName('form')[0];
let input1 = document.createElement("input");
let input2 = document.createElement("input");

const addAtribute =function(){
	input1.setAttribute('value', '');
	input1.setAttribute('id', 'elem1');
	
	input2.setAttribute('value', '');
	input2.setAttribute('id', 'elem2');

	inputs.appendChild(input1);
	inputs.appendChild(input2);
}
const addAtribute111 = function() {
	let input1 = document.getElementById('elem1');
	let input2 = document.getElementById('elem2');
	
	input1.setAttribute('value', 'fontWeight');
	input2.setAttribute('value', 'bold');
}
const addAtribute222 = function(){
	let inputs = document.getElementsByTagName('form')[0];
	let input1 = document.getElementById('elem1');
	let input2 = document.getElementById('elem2');
	inputs.removeChild(input1);
	inputs.removeChild(input2);
}
const printAtributs = function() {
	input1.setAttribute('value', 'white');
	input1.setAttribute('id', 'elem1');
	input1.setAttribute('name', 'name');
	input1.setAttribute('class', 'class');
	inputs.appendChild(input1);
	console.log(input1.id);
	console.log(input1.value);
	console.log(input1.name);
	console.log(input1.className);
	
}



const changeContent= function() {
	let input1 = document.createElement('input');
	input1.setAttribute('id', 'elem1');
	inputs.appendChild(input1);
	input1.setAttribute('value', 'coloreeee');
}
const changeContent111 = function() {
	let input1 = document.getElementById('elem1');
	input1.setAttribute('value', 'fffffffffffffff');
}
const changeContent222 = function() {
	let inputs = document.getElementsByTagName('form')[0];
	let input1 = document.getElementById('elem1');
	inputs.removeChild(input1);
}



const addElement = function() {
	let input1 = document.createElement('input');
	input1.setAttribute('id', 'elem1');
	inputs.appendChild(input1);
	input1.setAttribute('value', 'barev');
}
const addElement111 = function() {
	let input1 = document.getElementById('elem1');
	input1.value +='hhhhh';
}
const addElement222 = function() {
	let inputs = document.getElementsByTagName('form')[0];
	let input1 = document.getElementById('elem1');
	inputs.removeChild(input1);
}

function selectChanged(value) {
    switch(value) {
        case '1':
            addAtribute();
            break;
        case '2':
			changeContent();
			break;
		case '3':
			addElement();
			break;
		case '4':
			printAtributs();
			break;
    }
}




