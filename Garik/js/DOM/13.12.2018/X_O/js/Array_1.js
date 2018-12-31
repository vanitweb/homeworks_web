let size;
const td = document.getElementsByTagName("td");
const stugum = function(e){
    let tox,
        syun;
    for(let i in td){
        if(td[i] === e.target){
            tox = parseInt(i/size);
            syun = i - tox * size;
        }
    }
    if(tox === syun){
        stugum1(e, syun, td.length, size);//syun
        stugum1(e, tox * size, tox * size + size);//tox
        stugum1(e, 0, td.length, size + 1);//ankyun1
    }else if(tox + syun === size -1){
        stugum1(e, syun, td.length, size);//syun
        stugum1(e, tox * size, tox * size + size);//tox
        stugum1(e, size - 1, td.length, size - 1 - 1)//ankyun1
    }else{
        stugum1(e, syun, td.length, size);//syun
        stugum1(e, tox * size, tox * size + size);//tox
    }
}
const stugum1 = function(e, skizb, mijev, qayl = 1){
    let tdTextContent = e.target.textContent; 
    let count = 0;
    for(let i = skizb; i < mijev; i += qayl){
        if(td[i].textContent === tdTextContent){
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
