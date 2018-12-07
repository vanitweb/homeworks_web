setInterval(function(){
    if(document.getElementsByTagName("textarea")[0].value){
        setTimeout(function(){
            let text = document.getElementsByTagName("textarea")[0].value;
            let style = document.getElementsByTagName("style")[0];
            style.textContent = text;
        },5000)
    } 
},1000)
let option1 = document.getElementsByTagName("option");
let select = document.getElementsByTagName("select")[0];
let button = document.getElementsByTagName("button")[0];
let input = document.getElementsByTagName("input")[0];
const click1 = function(){
    if(select.value === option1[0].value){
        let input1 = document.createElement("input");
        let input2 = document.createElement("input");
        let button = document.createElement("button");
        button.textContent = "click1"
        button.setAttribute("onclick", "click2()")
        document.getElementsByTagName("body")[0].appendChild(input1);
        document.getElementsByTagName("body")[0].appendChild(input2);
        document.getElementsByTagName("body")[0].appendChild(button);
    }
    if(select.value === option1[1].value){
        let input1 = document.createElement("input");
        input1.setAttribute("id", "input1");
        let button = document.createElement("button");
        button.textContent = "click2"
        button.setAttribute("onclick", "click3()");
        document.getElementsByTagName("body")[0].appendChild(input1);
        document.getElementsByTagName("body")[0].appendChild(button);
    }
    if(select.value === option1[2].value){
        let input1 = document.createElement("input");
        input1.setAttribute("id", "input2");
        let button = document.createElement("button");
        button.textContent = "click3"
        button.setAttribute("onclick", "click4()");
        document.getElementsByTagName("body")[0].appendChild(input1);
        document.getElementsByTagName("body")[0].appendChild(button);
    }
    if(select.value === option1[3].value){
        let input1val = document.getElementsByTagName(input.value);
        for(let i of input1val){
            for(let name of i.getAttributeNames()){
                let value = i.getAttribute(name);
                document.getElementById("tpel").textContent += `Attribut - ${name}   name - ${value}`
            }
        }
    }
}
const click2 = function(){
    let input1val = document.getElementsByTagName(input.value);
    let input2 = document.getElementsByTagName("input")[1].value;
    let input3 = document.getElementsByTagName("input")[2].value;
    for(let i of input1val){
        i.setAttribute(input2, input3)
    }
    
}
const click3 = function(){
    let input1val = document.getElementsByTagName(input.value);
    for(let i of input1val){
        i.innerHTML = document.getElementById("input1").value;
    }
}
const click4 = function(){
    let input1val = document.getElementsByTagName(input.value);
    for(let i of input1val){
        i.innerHTML += document.getElementById("input2").value;
    }
}