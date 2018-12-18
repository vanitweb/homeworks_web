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
let id1, class1;
const option1 = function(id1, class1){
    let input1 = document.createElement("input");
    let input2 = document.createElement("input");
    let button = document.createElement("button");
    button.textContent = "click"
    button.setAttribute("onclick", "click1()")
    document.getElementById("p1").appendChild(input1);
    document.getElementById("p1").appendChild(input2);
    document.getElementById("p1").appendChild(button);
}
const option2 = function(){
    document.getElementById("p1").textContent = "";
    let input1 = document.createElement("input");
    input1.setAttribute("id", "input1");
    let button = document.createElement("button");
    button.textContent = "click"
    button.setAttribute("onclick", "click2()");
    document.getElementById("p1").appendChild(input1);
    document.getElementById("p1").appendChild(button);
}
 const option3 = function(){
     document.getElementById("p1").textContent = "";
     let input1 = document.createElement("input");
     input1.setAttribute("id", "input2");
     let button = document.createElement("button");
     button.textContent = "click"
     button.setAttribute("onclick", "click3()");
     document.getElementById("p1").appendChild(input1);
     document.getElementById("p1").appendChild(button);
 }
 const option4 = function(){
     document.getElementById("p1").textContent = "";
     let button = document.createElement("button");
     button.textContent = "click";
     button.setAttribute("onclick", "click4()");
     document.getElementById("p1").appendChild(button);
 }
const selectValue = function(){
    let value = input.value;
    let arrValue = value.split("");
    if(value[0] === "#"){
        arrValue.shift();
        id1 = arrValue.join("");
    }else if(value[0] === "."){
        arrValue.shift();
        class1 = arrValue.join("");
    }
    let selectValue = select.value;
    switch(selectValue){
        case "1":
            option1();
            break;
        case "2":
            option2();
            break;
        case "3":
            option3();
            break;
        case "4":
            option4();
            break;
    }
}
const click1 = function(){
    let input2 = document.getElementsByTagName("input")[1].value;
    let input3 = document.getElementsByTagName("input")[2].value;
    if(input.value[0] === "#"){
        document.getElementById(id1).setAttribute(input2, input3);
    }else if(input.value[0] === "."){
        let input1val = document.getElementsByClassName(class1);
        for(let i of input1val){
            i.setAttribute(input2, input3);
        }
    }else{
        let input1val = document.getElementsByTagName(input.value);
        for(let i of input1val){
            i.setAttribute(input2, input3)
        }
    }
}
const click2 = function(){
    if(input.value[0] === "#"){
        document.getElementById(id1).innerHTML = document.getElementById("input1").value;
    }else if(input.value[0] === "."){
        let input1val = document.getElementsByClassName(class1);
        for(let i of input1val){
            i.innerHTML = document.getElementById("input1").value;
        }
    }else{
        let input1val = document.getElementsByTagName(input.value);
        for(let i of input1val){
            i.innerHTML = document.getElementById("input1").value;
        }
    }
}
const click3 = function(){
    if(input.value[0] === "#"){
        document.getElementById(id1).innerHTML += document.getElementById("input2").value;
    }else if(input.value[0] === "."){
        let input1val = document.getElementsByClassName(class1);
        for(let i of input1val){
            i.innerHTML += document.getElementById("input2").value;
        }
    }else{
        let input1val = document.getElementsByTagName(input.value);
        for(let i of input1val){
            i.innerHTML += document.getElementById("input2").value;
        }
    }
}
const click4 = function(){
    if(input.value[0] === "#"){
        let input1val = document.getElementById(id1);
        for(let name of input1val.getAttributeNames()){
            let value = i.getAttribute(name);
            document.getElementById("p1").innerHTML += `${name},${value}`
        }
    }else if(input.value[0] === "."){
        let input1val = document.getElementsByClassName(class1);
        tpel(input1val)
    }else{
        let input1val = document.getElementsByTagName(input.value);
        tpel(input1val)
    }
}
const tpel = function(x){
    for(let i of x){
        for(let name of i.getAttributeNames()){
            let value = i.getAttribute(name);
            document.getElementById("p1").innerHTML += `${name},${value}`
        }
    }    
}