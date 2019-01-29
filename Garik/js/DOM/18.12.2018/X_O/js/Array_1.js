let size;
const td = document.getElementsByTagName("td");
const stugum = function(e){
    let tox,
        syun;
    let tdTextContent = e.target.textContent; 
    for(let i in td){
        if(td[i] === e.target){
            tox = parseInt(i/size);
            syun = i - tox * size;
        }
    }
    if(tox === syun){
        stugumSyun(syun, size, tdTextContent);
        stugumTox(tox, size, tdTextContent);
        stugumAnkyun1(size, tdTextContent);
    }else if(tox + syun === size -1){
        stugumSyun(syun, size, tdTextContent);
        stugumTox(tox, size, tdTextContent);
        stugumAnkyun2(size, tdTextContent)
    }else{
        stugumSyun(syun, size, tdTextContent);
        stugumTox(tox, size, tdTextContent);
    }
}
const stugumTox = function(tox, size, tdTextContent){
    let count = 0;
    for(let i = tox * size; i < tox * size + size; i++){
        if(td[i].textContent === tdTextContent){
            count++;
        }
    }
    if(count === size){
        krknel();
        return alert(`haxtanak ${tdTextContent}`)
    }
}
const stugumSyun = function(syun, size, tdTextContent){
    let count = 0;
    for(let i = syun; i < td.length; i += size){
        if(td[i].textContent === tdTextContent){
            count++;
        }
    }
    if(count === size){
        krknel();
        return alert(`haxtanak ${tdTextContent}`)
    }
}
const stugumAnkyun1 = function(size, tdTextContent){
        let count = 0;
        for(let i = 0; i < td.length; i += size){
            if(td[i + i/size].textContent === tdTextContent){
                count++;
            }
        }
        if(count === size){
            krknel();
            return alert(`haxtanak ${tdTextContent}`)
        }
}
const stugumAnkyun2 = function(size, tdTextContent){
    let count = 0;
    for(let i = size; i <= td.length; i += size){
        if(td[i - i/size].textContent === tdTextContent){
            count++;
        }
    }
    if(count === size){
        krknel();
        return alert(`haxtanak ${tdTextContent}`)
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
const krknel = function(){
    for(let i in td){
        td[i].textContent = "";
    }
}
const noric = function(){
    location.reload();
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
    const krknel = document.createElement("button");
    krknel.setAttribute("onclick", "krknel()")
    krknel.textContent = "krknel";
    document.body.appendChild(krknel);
    const noric = document.createElement("button");
    noric.setAttribute("onclick", "noric()")
    noric.textContent = "noric";
    document.body.appendChild(noric);
}