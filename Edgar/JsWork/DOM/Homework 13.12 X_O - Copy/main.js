let tds = document.querySelectorAll("td");
for (var i = 0; i < tds.length; i++) {
    tds[i].AddEventListener("click", tdClik);
}
function tdClik(){
this.innerHTML = "X"; 
}
let size = 3;
const dasht = function(){
    let table = document.getElementsByTagName("table")[0];
    for(let i = 0; i < size; i++){
        let tr = document.createElement("tr");
        table.appendChild(tr);
        for(let j = 0; j < size; j++){
            let td = document.createElement("td");
            td.setAttribute("onclick","xaxacox(event)")
            tr.appendChild(td);
        }
    }
}
const startGame = function(){
    dasht();
    document.getElementsByTagName("button")[0].style.display = "none";
    let res = document.createElement("button");
    res.setAttribute("onclick", "noric()")
    res.textContent = "noric";
    document.getElementsByTagName("body")[0].appendChild(res);
}