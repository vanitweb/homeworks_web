const optionsChange = function() {
	const ind = document.getElementById('chang').selectedIndex;
	const name = document.getElementById('chang').options;
	switch(name[ind].textContent) {
		case 'Add atribute':
		addAtribute();
		break;
		case 'Change content':
		changeContent();
		break;
		case 'Add element':
		addElement();
		break;
		case 'Print atribute':
		printAtribute();
		break;
	}
	
}

const addAtribute = function() {
	const inp_1 = document.createElement('input');
	const inp_2 = document.createElement('input');
	const but = document.createElement('button');
	but.setAttribute('onclick', 'addAtr()');
	but.textContent = 'Create Atribute';
	inp_1.setAttribute('id', 'inp1');
	inp_2.setAttribute('id', 'inp2');
	document.body.appendChild(inp_1);
	document.body.appendChild(inp_2);
	document.body.appendChild(but);
	
}

const changeContent = function() {
	const inp_1 = document.createElement('input');
	const but = document.createElement('button');
	document.body.appendChild(inp_1);
	document.body.appendChild(but);
	but.setAttribute('onclick', 'canCon()');
	but.textContent = 'Change Content';
	inp_1.setAttribute('id', 'inp1');
}

const addElement = function() {
	const inp_1 = document.createElement('input');
	const but = document.createElement('button');
	document.body.appendChild(inp_1);
	document.body.appendChild(but);
	but.setAttribute('onclick', 'adEl()');
	but.textContent = 'Add Element';
	inp_1.setAttribute('id', 'inp1');
}

const printAtribute = function() {
	const atr = document.getElementById('chang').attributes;
    for (let i = 0; i < atr.length; i++) {
      alert( atr[i].name + " = " + atr[i].value );
    }
}

const addAtr = function() {
	const name = document.getElementById('chang').options;
	const inp1 = document.getElementById('inp1').value;
	const inp2 = document.getElementById('inp2').value;
	let x = document.createAttribute(inp1);
	x.value = inp2;
	name[0].setAttributeNode(x);
		
}

const canCon = function() {
	let inp1 = document.getElementById('inp1').value;
	const name = document.getElementById('chang').options;
	name[1].textContent = inp1;
}

const adEl= function() {
	let inp1 = document.getElementById('inp1').value;
	const name = document.getElementById('chang').options;
	name[2].textContent = name[2].textContent + inp1;
}
