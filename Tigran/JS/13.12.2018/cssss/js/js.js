const add_atribute = function () {
    document.getElementsByTagName('input')[1].style.display = "block";
    document.getElementsByTagName('input')[2].style.display = "block";
    document.getElementsByTagName('button')[0].style.display = "block";
    document.getElementsByTagName('button')[1].style.display = "none";
}
const dabavit = function () {
    let umonc = document.getElementsByTagName('input')[0].value;
    let atr = document.getElementsByTagName('input')[1].value;
    let val = document.getElementsByTagName('input')[2].value;
    let um = document.getElementsByTagName(umonc);
    for(elem of um){
        elem.setAttribute(atr, val);
    }
}
// 2

const change = function () {
    document.getElementsByTagName('input')[3].style.display = "block";
    document.getElementsByTagName('button')[2].style.display = "block";
    document.getElementsByTagName('button')[3].style.display = "none";
}

const poxel = function () {
    let umonc = document.getElementsByTagName('input')[0].value;
    console.log(umonc);
    
    let val = document.getElementsByTagName('input')[3].value;
    console.log(val);
    document.getElementsByTagName(umonc)[0].innerHTML = val;
}

// 3

const add = function () {
    document.getElementsByTagName('input')[4].style.display = "block";
    document.getElementsByTagName('button')[4].style.display = "block";
    document.getElementsByTagName('button')[5].style.display = "none";
}

const avelacnel = function () {
    let umonc = document.getElementsByTagName('input')[0].value;
    let val = document.getElementsByTagName('input')[4].value;
    document.getElementsByTagName(umonc)[0].innerHTML += val;
}

// 4

const atributnery = function () {
    document.getElementsByTagName('input')[5].style.display = "block";
    document.getElementsByTagName('button')[6].style.display = "block";
    document.getElementsByTagName('button')[7].style.display = "none";
}

const atributner = function () {
    let umonc = document.getElementsByTagName('input')[0].value;
    let um = document.getElementsByTagName(umonc);
    let p = document.getElementById("p");
    for(elem of um){
       for(let name of elem.getAttributeNames()){
            let value = elem.getAttribute(name);
            console.log(name, value);
            p.textContent += name + " "+ value;
        } 
    }
}