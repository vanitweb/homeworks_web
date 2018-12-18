//homework 1
function myFunc() {
	let inputText = document.getElementsByTagName("textarea")[0].value;
	let newStyle = document.getElementsByTagName("style")[0];
	newStyle.textContent = inputText;
}
function cssStyle() {
	if(document.getElementsByTagName("textarea")[0].value) {
		setTimeout(myFunc, 5000);
	}
	
}
//homework2
function homework2(attr) {
	if(attr === 0) {
		document.getElementById("addAtrr").style.display = "block";
		document.getElementById("change").style.display = "none";
		document.getElementById("addElem").style.display = "none";
		document.getElementById("printAtrr").style.display = "none";
	}
	if(attr === 1) {
		document.getElementById("addAtrr").style.display = "none";
		document.getElementById("change").style.display = "block";
		document.getElementById("addElem").style.display = "none";
		document.getElementById("printAtrr").style.display = "none";
	}
	if(attr === 2) {
		document.getElementById("addAtrr").style.display = "none";
		document.getElementById("change").style.display = "none";
		document.getElementById("addElem").style.display = "block";
		document.getElementById("printAtrr").style.display = "none";
	}
	if(attr === 3) {
		document.getElementById("addAtrr").style.display = "none";
		document.getElementById("change").style.display = "none";
		document.getElementById("addElem").style.display = "none";
		document.getElementById("printAtrr").style.display = "block";
	}
}
function addButton() {
	const elem = document.getElementById("elem").value;
	const element = document.getElementsByTagName(elem)[0];
	const att = document.createAttribute(document.getElementById("atr").value);
	att.value = document.getElementById("val").value;
	element.setAttributeNode(att);
}
function change() {
	const newContent = document.getElementById("elem").value;
	document.getElementsByTagName(newContent)[0].textContent = document.getElementsByClassName("changeAtrr")[0].value;
}
function addElement() {
	const elem = document.getElementById("elem").value;
	const newElement = document.createElement(elem);
    document.body.appendChild(newElement);
}
function print() {
	const attr = document.body.attributes;
	const div = document.getElementById("printAtrr");
	div.textContent += `${attr[0].name}="${attr[0].value}"`;
}