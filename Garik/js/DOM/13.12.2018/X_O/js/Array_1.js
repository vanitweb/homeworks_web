let size;
const td = document.getElementsByTagName("td");
const stugum = function(e){
    let tox,
        syun;
    let count = 0;
    for(let i in td){
        if(td[i] === e.target){
            tox = parseInt(i/size);
            syun = i - tox * size;
        }
    }
    for(let i = tox * size; i < tox * size + size; i++){
        if(td[i].textContent === e.target.textContent){
            count++;
        }
    }
    if(count === size){
        noric();
        return alert(`haxtanak ${e.target.textContent}`)
    }
    count = 0;
    for(let i = syun; i < td.length; i += size){
        if(td[i].textContent === e.target.textContent){
            count++;
        }
    }
    if(count === size){
        noric();
        return alert(`haxtanak ${e.target.textContent}`)
    }
    if(tox === syun){
        count = 0;
        for(let i = 0; i < td.length; i += size){
            if(td[i + i/size].textContent === e.target.textContent){
                count++;
            }
        }
        if(count === size){
            noric();
            return alert(`haxtanak ${e.target.textContent}`)
        }
    }
    if(tox + syun === size -1){
        count = 0;
        for(let i = size; i <= td.length; i += size){
            if(td[i - i/size].textContent === e.target.textContent){
                count++;
            }
        }
        if(count === size){
            noric();
            return alert(`haxtanak ${e.target.textContent}`)
        }   
    }
}
const clojure = function(){
    let count = 0;
    return function(e){
        if(!e.target.textContent){
            count++; 
            (count % 2 === 0) ? e.target.textContent = "O" : e.target.textContent = "X";
            if(count >= 2 * size - 1){
                stugum(e);
            }
        }
    }
}
const xaxacox = clojure();
const noric = function(){
    for(let i in td){
        td[i].textContent = "";
    }
}
const dasht = function(){
    const table = document.getElementsByTagName("table")[0];
    for(let i = 0; i < size; i++){
        const tr = document.createElement("tr");
        table.appendChild(tr);
        for(let j = 0; j < size; j++){
            const td = document.createElement("td");
            td.setAttribute("onclick","xaxacox(event)")
            tr.appendChild(td);
        }
    }
}
const sksel = function(){
    size = parseInt(prompt("dashti tiv"));
    dasht();
    document.getElementsByTagName("button")[0].style.display = "none";
    const noric = document.createElement("button");
    noric.setAttribute("onclick", "noric()")
    noric.textContent = "noric";
    document.body.appendChild(noric);
}
