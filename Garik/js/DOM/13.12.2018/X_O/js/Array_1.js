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
    let tox,
        syun;
    let countTox = 0;
    let countSyun = 0;
    let countAnkyun1 = 0;
    let countAnkyun2 = 0;
    for(let i in td){
        if(td[i] === e.target){
            tox = parseInt(i/size);
            syun = i - tox * size;
        }
    }
    for(let i = tox * size; i < tox * size + size; i++){
        if(td[i].textContent === arg){
            countTox++;
        }
    }
    if(countTox === size){
        return alert(`haxtanak ${arg}`)
    }
    for(let i = syun; i < td.length; i += size){
        if(td[i].textContent === arg){
            countSyun++;
        }
    }
    if(countSyun === size){
        return alert(`haxtanak ${arg}`)
    }
    for(let i = 0; i < td.length; i += size){
        for(let j = 0; j < size; j++){
            if(td[i + j].textContent === arg){
                countAnkyun1++;
            }
        }
    }
    if(countAnkyun1 === size){
        return alert(`haxtanak ${arg}`)
    }
    for(let i = size; i < td.length; i += size){
        for(let j = 0; j < size; j++){
            if(td[i - j].textContent === arg){
                countAnkyun2++;
            }
        }
    }
    if(countAnkyun2 === size){
        return alert(`haxtanak ${arg}`)
    }
}
const xaxacox1 = function(){
    let count = 0;
    return function(e){
        let td = document.getElementsByTagName("td")[0];
        if(!e.target.textContent){
            count++; 
            (count % 2 === 0) ? e.target.textContent = "O" : e.target.textContent = "X";
            if(count >= 2 * size - 1){
                stugum(e);
            }
        }
    }
}
const xaxacox = xaxacox1();
const noric = function(){
    location.reload()
}