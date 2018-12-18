
//der uxxelu em, kisat e

const optionsChange = function() {
    const ind = document.getElementById('chang').selectedIndex;
    const name = document.getElementById('chang').options;
    switch(name[ind].textContent) {
        case '1. ավելացնել ատրիբուտ':
        addAtribute();
        break;
        case '2. փոխել պարունակությունը':
        changeContent();
        break;
        case '3. ավելացնել էլեմենտ':
        addElement();
        break;
        case '4. տպել ատրիբուտները':
        printAtribute();
        break;
    }
}


const addAtribute = function(){
        const name = document.createElement("input");
         const valu = document.createElement("input");
         const but = document.createElement('button');
         but.setAttribute('onclick', 'newAddAtribute()');
        but.textContent = '1. ավելացնել ատրիբուտ';
        name.setAttribute('id', 'inp1');
        valu.setAttribute('id', 'inp2');
        document.body.appendChild(name);
        document.body.appendChild(valu);
        document.body.appendChild(but);     
}

const changeContent = function(){
    const chenj = document.createElement("input");
    const but = document.createElement('button');
    document.body.appendChild(chenj);
    document.body.appendChild(but);
    but.setAttribute('onclick', 'newchangeContent()');
    but.textContent = '2. փոխել պարունակությունը';
    chenj.setAttribute('id', 'inp1');
 }

const addElement = function(){
    const norParnakutyun = document.createElement("input");
    const but = document.createElement('button');
    document.body.appendChild(norParnakutyun);
    document.body.appendChild(but);
    but.setAttribute('onclick', 'newAddElement()');
    but.textContent = '3. ավելացնել էլեմենտ';
    norParnakutyun.setAttribute('id', 'inp1');
}
const printAtribute = function() {
    const printAt = document.getElementById('chang').attributes;
    for (let i = 0; i < printAt.length; i++) {
      alert( printAt[i].name + " = " + printAt[i].value );
    }
}

const newAddAtribute = function() {
    const name = document.getElementById('chang').options;
    const inp1 = document.getElementById('inp1').value;
    const inp2 = document.getElementById('inp2').value;
    let x = document.createAttribute(inp1);
    x.value = inp2;
    name[0].setAttributeNode(x);        
}

const newchangeContent = function() {
    let inp1 = document.getElementById('inp1').value;
    const name = document.getElementById('chang').options;
    name[1].textContent = inp1;
}

const newAddElement= function() {
    let inp1 = document.getElementById('inp1').value;
    const name = document.getElementById('chang').options;
    name[2].textContent = name[2].textContent + inp1;
}