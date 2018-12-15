let size = 10;
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
const sksel = function(){
    dasht();
    document.getElementsByTagName("button")[0].style.display = "none";
    let res = document.createElement("button");
    res.setAttribute("onclick", "noric()")
    res.textContent = "noric";
    document.getElementsByTagName("body")[0].appendChild(res);
}
const stugum = function(e){
    let haaxtanak = false;
    let td = document.getElementsByTagName("td");
    let arg = e.target.textContent;
    for(let i = 0; i <= size - 3; i++){
        for(let j = 0; j < td.length; j += size){
            if(td[i + j].textContent === arg && td[i + j + 1].textContent === arg && td[i + j + 2].textContent === arg) {
                haaxtanak = true;
                alert(`haxtanak ${arg}`);
            }
        }
    }
    for(let i = 0; i < td.length - (2 * size); i++){
        if(td[i].textContent === arg && td[i + size].textContent === arg && td[i + (2 * size)].textContent === arg) {
            haaxtanak = true;
            alert(`haxtanak ${arg}`);
        }
        if(td[i].textContent === arg && td[i + size + 1].textContent === arg && td[i + (2 * size) + 2].textContent === arg) {
            haaxtanak = true;
            alert(`haxtanak ${arg}`);
        }
        if(td[i].textContent === arg && td[i + size - 1].textContent === arg && td[i + (2 * size) - 2].textContent === arg) {
            haaxtanak = true;
            alert(`haxtanak ${arg}`);
        }
    }
    if(haaxtanak === true){
        document.getElementsByTagName("table")[0].style.display = "none";
    }
}
const xaxacox1 = function(){
    let count = 0;
    return function(e){
        let td = document.getElementsByTagName("td")[0];
        if(!e.target.textContent){
            count++; 
            (count % 2 === 0) ? e.target.textContent = "O" : e.target.textContent = "X";
            if(count >= 5){
                console.log(count)
                stugum(e);
            }
        }
    }
}
const xaxacox = xaxacox1();
const noric = function(){
    location.reload()
}