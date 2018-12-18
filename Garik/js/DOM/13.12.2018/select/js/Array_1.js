////Գրել ծրագիր որը կունենա՝
////֊ input էլեմենտ, որտեղ կարող ենք գրել էլեմենտի selector, 
////օրինակ` #myUniqueId, div, .someClass
////
////֊ select/dropdown որի ընտրված option-ը պետք է կիրառվեն վերը նշված selector-ի համար և որը ունի հետևյալ option-ները.
////   1." ավելացնել ատրիբուտ " -> ընտրելու դեպքում կհայտնվի 2 input, որոնցից մեկում կարող ենք գրել ատրիբուտի անունը, մյուսում՝ արժեքը։
////օրինակ` ատրիբուտ` class, արժեք` myClass
//// 
//// 2. "փոխել պարունակությունը" ֊> ընտրելու դեպքում կհայտնվի 1 input, որտեղ կարող ենք գրել էլեմենտի նոր պարունակությունը։
////օրինակ` <div>hello</div>
//// 3. "ավելացնել էլեմենտ " ֊> ընտրելու դեպքում կհայտնվի input, որտեղ կարող ենք գրել պարունակությունը, որը կավելանա էլեմենտին։
////4. "տպել ատրիբուտները "֊> ընտրելու դեպքում կտպի էլեմենտի բոլոր ատրիբուտները
////
////Ունենալ նաև button, որի միջոցով կկատարվի 1-3 տարբերակին համապատասխան գործողությունը, ելնելով նրանից, թե այդ պահին որն է ընտրված։
let option = document.getElementsByTagName("option");
let select = document.getElementsByTagName("select")[0];
let button = document.getElementsByTagName("button")[0];
let input = document.getElementsByTagName("input")[0];
let id, class1;
const option1 = function(){
        document.getElementById("p2").textContent = "";
        document.getElementById("p3").textContent = "";
        document.getElementById("p4").textContent = "";
        let input1 = document.createElement("input");
        let input2 = document.createElement("input");
        let button = document.createElement("button");
        button.textContent = "click1"
        button.setAttribute("onclick", "click2()")
        document.getElementById("p1").appendChild(input1);
        document.getElementById("p1").appendChild(input2);
        document.getElementById("p1").appendChild(button);
}
const option2 = function(){
    document.getElementById("p1").textContent = "";
    document.getElementById("p3").textContent = "";
    document.getElementById("p4").textContent = "";
    let input1 = document.createElement("input");
    input1.setAttribute("id", "input1");
    let button = document.createElement("button");
    button.textContent = "click2"
    button.setAttribute("onclick", "click3()");
    document.getElementById("p2").appendChild(input1);
    document.getElementById("p2").appendChild(button);
}
const option3 = function(){
    document.getElementById("p1").textContent = "";
    document.getElementById("p2").textContent = "";
    document.getElementById("p4").textContent = "";
    let input1 = document.createElement("input");
    input1.setAttribute("id", "input2");
    let button = document.createElement("button");
    button.textContent = "click3"
    button.setAttribute("onclick", "click4()");
    document.getElementById("p2").appendChild(input1);
    document.getElementById("p2").appendChild(button);
}
const option4 = function(){
    document.getElementById("p1").textContent = "";
    document.getElementById("p2").textContent = "";
    document.getElementById("p3").textContent = "";
    let input1val = document.getElementsByTagName(input.value);
    for(let i of input1val){
        for(let name of i.getAttributeNames()){
            let value = i.getAttribute(name);
            document.getElementById("p4").textContent += `Attribut - ${name}   name - ${value}`
        }
    }
}
const click1 = function(){
    let value = input.value;
    let arrValue = value.split("");
    if(value[0] === "#"){
        arrValue.shift();
        id = arrValue.join("");
    }else if(value[0] === "."){
        arrValue.shift();
        class1 = arrValue.join("");
    }
    if(select.value === option[0].value){
        option1();
    }else if(select.value === option[1].value){
        option2();
    }else if(select.value === option[2].value){
        option3();
    }else if(select.value === option[3].value){
        option4();
    }
}
const click2 = function(){
    let input1val = document.getElementsByTagName(input.value);
    let input2 = document.getElementsByTagName("input")[1].value;
    let input3 = document.getElementsByTagName("input")[2].value;
    if(id !== undefined){
        document.getElementById(id).setAttribute(input2, input3);
    }else if(class1 !== undefined){
        document.getElementsByTagName(class1).setAttribute(input2, input3);
    }else{
        for(let i of input1val){
            i.setAttribute(input2, input3)
        }
    }
}
const click3 = function(){
    let input1val = document.getElementsByTagName(input.value);
    if(id !== undefined){
        document.getElementById(id).innerHTML = document.getElementById("input1").value;
    }else if(class1 !== undefined){
        document.getElementsByClassName(class1).innerHTML = document.getElementById("input1").value;
    }else{
        for(let i of input1val){
            i.innerHTML = document.getElementById("input1").value;
        }
    }
}
const click4 = function(){
    let input1val = document.getElementsByTagName(input.value);
    if(id !== undefined){
        document.getElementById(id).innerHTML += document.getElementById("input2").value;
    }else if(class1 !== undefined){
        document.getElementsByClassName(class1).innerHTML += document.getElementById("input2").value;
    }else{
        for(let i of input1val){
            i.innerHTML += document.getElementById("input2").value;
        }
    }
}