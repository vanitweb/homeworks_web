const remove = function() {
	const div = document.body.children[1];
	div.remove();
}

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
	remove();
	const block = document.createElement('div');
	const inp_1 = document.createElement('input');
	const inp_2 = document.createElement('input');
	const but = document.createElement('button');
	but.setAttribute('onclick', 'addAtr()');
	but.textContent = 'Create Atribute';
	inp_1.setAttribute('id', 'inp1');
	inp_2.setAttribute('id', 'inp2');
	document.body.appendChild(block)[1];
	block.appendChild(inp_1);
	block.appendChild(inp_2);
	block.appendChild(but);
	
}

const changeContent = function() {
	remove();
	const block = document.createElement('div');
	const inp_1 = document.createElement('input');
	const but = document.createElement('button');
	document.body.appendChild(block)[1];
	block.appendChild(inp_1);
	block.appendChild(but);
	but.setAttribute('onclick', 'canCon()');
	but.textContent = 'Change Content';
	inp_1.setAttribute('id', 'inp1');
}

const addElement = function() {
	remove();
	const block = document.createElement('div');
	const inp_1 = document.createElement('input');
	const but = document.createElement('button');
	document.body.appendChild(block)[1];
	block.appendChild(inp_1);
	block.appendChild(but);
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
	const x = document.createAttribute(inp1);
	x.value = inp2;
	name[1].setAttributeNode(x);
		
}

const canCon = function() {
	const inp1 = document.getElementById('inp1').value;
	const name = document.getElementById('chang').options;
	name[2].textContent = inp1;
}

const adEl= function() {
	const inp1 = document.getElementById('inp1').value;
	const name = document.getElementById('chang').options;
	name[3].textContent = name[3].textContent + inp1;
}
