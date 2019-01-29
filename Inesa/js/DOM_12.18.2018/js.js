/* Գրել՝
֊ input էլեմենտ, որտեղ կարող ենք գրել էլեմենտի selector, 
֊ select/dropdown որը ունի հետևյալ option-ները
   1. ավելացնել ատրիբուտ -> ընտրելու դեպքում կհայտնվի 2 input, որոնցից մեկում կարող ենք գրել ատտրիբուտի անունը, մյուսում՝ արժեքը։
   2. փոխել պարունակությունը ֊> ընտրելու դեպքում կհայտնվի 1 input, որտեղ կարող ենք գրել էլեմենտի նոր պարունակությունը։
   3. ավելացնել էլեմենտ ֊> ընտրելու դեպքում կհայտնվի input, որտեղ կարող ենք գրել պարունակությունը, որը կավելանա էլեմենտին։
   4. տպել ատրիբուտները ֊> ընտրելու դեպքում կտպի էլեմենտի բոլոր ատրիբուտները
 
*1-3 տարբերակների համար կարող ենք ունենալ button, որի միջոցով կկատարվի տարբերակին համապատասխան գործողությունը։  */
function buttonFunc()
{
	avelacnelAtribut();
	poxelParunakutyunn();
	avelacnelElement();
	tpelAtributy();
}
		
function avelacnelAtribut()
{
	let inp1 = document.createElement("input");
	let inp2 = document.createElement("input");
	inp2.setAttribute("type", "text");
	inp1.setAttribute("type", "text");
	let newEl = document.createElement("div");
	newEl.setAttribute("inp1.value", "inp2.value");
}

function poxelParunakutyunn()
{
	let newInp = document.createElement("input");
	newInp.setAttribute("type","text");
	let option1 = document.getElementById("Option1").value;
	option1 = newInp.value;	
}

function avelacnelElement()
{
	let inp = document.createElement("input");
	inp.setAttribute("type","text");
	let newElem = inp.value;
	let avelacvoxElement = document.createElement("newElem");
	
}

function tpelAtributy()
{
	let input = document.createElement("input");
	input.setAttribute("type","text");
	alert(Option4.getAttribute("input.value"));
}









