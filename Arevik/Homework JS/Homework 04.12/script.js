//Գրել ծրագիր որը կունենա՝
//֊ input էլեմենտ, որտեղ կարող ենք գրել էլեմենտի selector, օրինակ` #myUniqueId, div, .someClass

//֊ select/dropdown որի ընտրված option-ը պետք է կիրառվեն վերը նշված selector-ի համար և որը ունի հետևյալ option-ները.
//  1." ավելացնել ատրիբուտ " -> ընտրելու դեպքում կհայտնվի 2 input, որոնցից մեկում կարող ենք գրել ատրիբուտի անունը, մյուսում՝ արժեքը։ օրինակ` ատրիբուտ` class, արժեք` myClass

//2. "փոխել պարունակությունը" ֊> ընտրելու դեպքում կհայտնվի 1 input, որտեղ կարող ենք գրել էլեմենտի նոր պարունակությունը։ օրինակ` <div>hello</div>
//3. "ավելացնել էլեմենտ " ֊> ընտրելու դեպքում կհայտնվի input, որտեղ կարող ենք գրել պարունակությունը, որը կավելանա էլեմենտին։
//4. "տպել ատրիբուտները "֊> ընտրելու դեպքում կտպի էլեմենտի բոլոր ատրիբուտները

//Ունենալ նաև button, որի միջոցով կկատարվի 1-3 տարբերակին համապատասխան գործողությունը, ելնելով նրանից, թե այդ պահին որն է ընտրված։


let inputTest = document.getElementById("test");
let inputs = document.getElementsByTagName('form')[0];
let input1 = document.createElement("input");
let input2 = document.createElement("input");

const addAtribute =function(){
	input1.setAttribute('id', 'elem1')
	input2.setAttribute('id', 'elem2')
	inputs.appendChild(input1);
	inputs.appendChild(input2);
}
const addAtribute111 = function() {
	let input1 = document.getElementById('elem1');
	let input2 = document.getElementById('elem2');
	let element = document.getElementsByClassName(inputTest.value)[0];
	element.classList.add(input2.value);
}
const addAtribute222 = function(){
	inputs.removeChild(input1);
	inputs.removeChild(input2);
	let element = document.getElementsByClassName(inputTest.value)[0];
	element.classList.remove(input2.value);
}


const changeContent= function() {
	input1.setAttribute('id', 'elem1');
	inputs.appendChild(input1);
}
const changeContent111 = function() {
	let input1 = document.getElementById('elem1');
	let element = document.getElementsByClassName(inputTest.value)[0];
	element.textContent = input1.value;
}
const changeContent222 = function() {
	inputs.removeChild(input1);
	let element = document.getElementsByClassName(inputTest.value)[0];
	element.classList.remove(input1.value);
	element.textContent = document.getElementsByClassName('inputTest.value')[0];
}


const addElement = function() {
	input1.setAttribute('id', 'elem1');
	inputs.appendChild(input1);
}
const addElement111 = function() {
	let input1 = document.getElementById('elem1');
	let element = document.getElementsByClassName(inputTest.value)[0];
	element.textContent += input1.value;
}
const addElement222 = function() {
	inputs.removeChild(input1);
	let element = document.getElementsByClassName(inputTest.value)[0];
	element.classList.remove(input1.value);
	element.textContent = document.getElementsByClassName('inputTest.value')[0];
}

const printAtributs = function() {
	let element = document.getElementsByClassName(inputTest.value)[0];
	let attr = element.attributes;
	console.log(attr);
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




