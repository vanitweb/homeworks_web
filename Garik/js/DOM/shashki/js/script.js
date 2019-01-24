const td = document.getElementsByTagName("td");
const car = document.getElementsByTagName("button");
let cordinat;
let seva;
const karmirObj = {
    class : "karmirner",
    onclick : "sever(event)",
    onclickKent : "karmir(event)",
    onclickZuyg : "karmirZuyg(event)",
    toxPoxelDzax : -9,
    toxPoxelAj : -7,
    qanak : 0,
};
const severObj = {
    class : "sever",
    onclick : "karmirner(event)",
    onclickKent : "sev(event)",
    onclickZuyg : "sevZuyg(event)",
    toxPoxelDzax : 7,
    toxPoxelAj : 9,
    qanak : 0,
};
const carDnel = function(indexValue, classValue, onclickValue){
    let but = document.createElement("button");
    but.setAttribute("class", classValue);
    but.setAttribute("onclick", onclickValue);
    td[indexValue].appendChild(but);
}
const carJnjel = function(tdIndex){
    document.getElementsByTagName("td")[tdIndex].innerHTML = "";
    if(karmirObj.qanak === 12){
        document.getElementsByTagName("table")[0].innerHTML = `haxtec Karmirnere`
    }else if(severObj.qanak === 12){
        document.getElementsByTagName("table")[0].innerHTML = `haxtec Severe`
    }
}
const nkarel = function(){
    const table = document.getElementsByTagName("table")[0];
    for(let i = 0; i < 8; i++){
        let tr = document.createElement("tr");
        table.appendChild(tr);
        for(let j = 0; j < 8; j++){
            let td = document.createElement("td");
            tr.appendChild(td);
        }
    }
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < td.length; j += 8){
            if(i % 2 !== 0 && j % 16 === 0){
                td[i + j].style.backgroundColor = "#7c3c00";
                if(i + j < 24){
                    carDnel(i + j, "sever", "sever(event)") 
                }else if(i + j >= 40){
                    carDnel(i + j, "karmirner", "karmirner(event)")
                }
            }else if(i % 2 === 0 && j % 16 !== 0){
                td[i + j].style.backgroundColor = "#7c3c00";
                if(i + j < 24){
                    carDnel(i + j, "sever", "sever(event)")  
                }else if(i + j >= 40){
                    carDnel(i + j, "karmirner", "karmirner(event)")
                }
            }
        }
    }
}
const sksel = function(){
    nkarel();
}
const hnaravorQayl = function(e, tox, syun, tdIndex){
    if((seva === karmirObj && tdIndex !== 8)
       || (seva === severObj && tdIndex !== 55)){
        if(!td[tdIndex + seva.toxPoxelAj].hasChildNodes() 
           && !td[tdIndex + seva.toxPoxelDzax].hasChildNodes() 
           && syun !== 7 && syun !== 0){
            td[tdIndex + seva.toxPoxelAj].setAttribute("onclick", "qayl1(event)")
            td[tdIndex + seva.toxPoxelDzax].setAttribute("onclick", "qayl1(event)")
        }else if(!td[tdIndex + seva.toxPoxelDzax].hasChildNodes()
                && syun !== 0){
            cordinat = seva.toxPoxelDzax;
            td[tdIndex + cordinat].setAttribute("onclick", "qayl(event)")
        }else if(!td[tdIndex + seva.toxPoxelAj].hasChildNodes()
                && syun !== 7){
            cordinat = seva.toxPoxelAj;
            td[tdIndex + cordinat].setAttribute("onclick", "qayl(event)")
        }   
    }
    if(seva === karmirObj && tdIndex === 8 
       && !td[tdIndex + seva.toxPoxelAj].hasChildNodes()){
        cordinat = seva.toxPoxelAj;
        td[tdIndex + cordinat].setAttribute("onclick", "qayl(event)")
    }else if(seva === severObj && tdIndex === 55 
             && !td[tdIndex + seva.toxPoxelDzax].hasChildNodes()){
        cordinat = seva.toxPoxelDzax;
        td[tdIndex + cordinat].setAttribute("onclick", "qayl(event)")
    }
}
const utel = function(e, tox, syun, tdIndex){
    if((seva === karmirObj && tdIndex !== 17)
      || (seva === severObj && tdIndex !== 46)){
        if(td[tdIndex + seva.toxPoxelAj].hasChildNodes()
           && td[tdIndex + seva.toxPoxelAj].firstChild.getAttribute("class") !== seva.class
           && !td[tdIndex + 2 * seva.toxPoxelAj].hasChildNodes()
           && td[tdIndex + seva.toxPoxelDzax].hasChildNodes()
           && td[tdIndex + seva.toxPoxelDzax].firstChild.getAttribute("class") !== seva.class
           && !td[tdIndex + 2 * seva.toxPoxelDzax].hasChildNodes()
           && syun !== 7 && syun !== 0){
            td[tdIndex + 2 * seva.toxPoxelAj].setAttribute("onclick", "utelZuyg(event)")
            td[tdIndex + 2 * seva.toxPoxelDzax].setAttribute("onclick", "utelZuyg(event)")
        }else if(td[tdIndex + seva.toxPoxelDzax].hasChildNodes()
                 && td[tdIndex + seva.toxPoxelDzax].firstChild.getAttribute("class") !== seva.class 
                 && !td[tdIndex + 2 * seva.toxPoxelDzax].hasChildNodes()
                 && syun !== 0){
            cordinat = seva.toxPoxelDzax;
            td[tdIndex + 2 * seva.toxPoxelDzax].setAttribute("onclick", "utelKent(event)")
        }else if(td[tdIndex + seva.toxPoxelAj].hasChildNodes()
                 && td[tdIndex + seva.toxPoxelAj].firstChild.getAttribute("class") !== seva.class 
                 && !td[tdIndex + 2 * seva.toxPoxelAj].hasChildNodes()
                 && syun !== 7){
            cordinat = seva.toxPoxelAj;
            td[tdIndex + 2 * seva.toxPoxelAj].setAttribute("onclick", "utelKent(event)")
        }   
    }
    if(seva === karmirObj && tdIndex === 17
       && td[tdIndex + seva.toxPoxelAj].hasChildNodes()
       && td[tdIndex + seva.toxPoxelAj].firstChild.getAttribute("class") !== seva.class 
       && !td[tdIndex + 2 * seva.toxPoxelAj].hasChildNodes()){
        cordinat = seva.toxPoxelAj;
        td[tdIndex + 2 * seva.toxPoxelAj].setAttribute("onclick", "utelKent(event)")   
    }else if(seva === severObj && tdIndex === 46 
             && td[tdIndex + seva.toxPoxelDzax].hasChildNodes()
             && td[tdIndex + seva.toxPoxelDzax].firstChild.getAttribute("class") !== seva.class 
             && !td[tdIndex + 2 * seva.toxPoxelDzax].hasChildNodes()){
        cordinat = seva.toxPoxelDzax;
        td[tdIndex + 2 * seva.toxPoxelDzax].setAttribute("onclick", "utelKent(event)")
    }
}
const utelKent = function(e){
    let syun = e.target.cellIndex;
    let tox = e.target.parentElement.rowIndex;
    let tdIndex = tox * 8 + syun;
    e.target.removeAttribute("onclick", "utelKent(event)");
    if(syun !== 0 && syun !== 7){
        if(cordinat === seva.toxPoxelAj){
            td[tdIndex - 2 * cordinat + seva.toxPoxelDzax].removeAttribute("onclick", "qayl(event)")
        }else if(cordinat === seva.toxPoxelDzax){
            td[tdIndex - 2 * cordinat + seva.toxPoxelAj].removeAttribute("onclick", "qayl(event)")
        }
    }
    ++seva.qanak;
    carJnjel(tdIndex - 2 * cordinat);
    carJnjel(tdIndex - cordinat);
    carDnel(tdIndex, seva.class, seva.onclick);
}
const utelZuyg = function(e){
    let syun = e.target.cellIndex;
    let tox = e.target.parentElement.rowIndex;
    let tdIndex = tox * 8 + syun;
    ++seva.qanak;
    carDnel(tdIndex, seva.class, seva.onclick);
    e.target.removeAttribute("onclick", "utelZuyg(event)");
    if(td[tdIndex + 4].getAttribute("onclick") === "utelZuyg(event)"){
        carJnjel(tdIndex - seva.toxPoxelDzax);
        carJnjel(tdIndex - 2 * seva.toxPoxelDzax);
        td[tdIndex + 4].removeAttribute("onclick", "utelZuyg(event)")
    }else if(td[tdIndex - 4].getAttribute("onclick") === "utelZuyg(event)"){
        carJnjel(tdIndex - seva.toxPoxelAj);
        carJnjel(tdIndex - 2 * seva.toxPoxelAj);
        td[tdIndex - 4].removeAttribute("onclick", "utelZuyg(event)")
    }
}
const qayl = function(e){
    let syun = e.target.cellIndex;
    let tox = e.target.parentElement.rowIndex;
    let tdIndex = tox * 8 + syun;
    e.target.removeAttribute("onclick", "qayl(event)")
    carJnjel(tdIndex - cordinat)
    carDnel(tdIndex, seva.class, seva.onclick);
}
const qayl1 = function(e){
    let syun = e.target.cellIndex;
    let tox = e.target.parentElement.rowIndex;
    let tdIndex = tox * 8 + syun;
    carDnel(tdIndex, seva.class, seva.onclick);
    e.target.removeAttribute("onclick", "qayl1(event)")
    if(td[tdIndex + 2].getAttribute("onclick") === "qayl1(event)"){
        carJnjel(tdIndex - seva.toxPoxelDzax);
        td[tdIndex + 2].removeAttribute("onclick", "qayl1(event)")
    }else if(td[tdIndex - 2].getAttribute("onclick") === "qayl1(event)"){
        carJnjel(tdIndex - seva.toxPoxelAj);
        td[tdIndex - 2].removeAttribute("onclick", "qayl1(event)")
    }
}
const qaylKamUtel = function(e){
    if(e.target.getAttribute("class") === severObj.class){
        seva = severObj;
    }else if(e.target.getAttribute("class") === karmirObj.class){
        seva = karmirObj;
    }
    let syun = e.target.parentElement.cellIndex;
    let tox = e.target.parentElement.parentElement.rowIndex;
    let tdIndex = tox * 8 + syun;
    if((seva === karmirObj && tox > 0)
       || (seva === severObj && tox < 7)){
        hnaravorQayl(e, tox, syun, tdIndex);   
    }
    if((seva === karmirObj && tox > 1)
       || (seva === severObj && tox < 6)){
        utel(e, tox, syun, tdIndex)  
    }
}
const sever = function(e){
    qaylKamUtel(e)
}
const karmirner = function(e){
    qaylKamUtel(e)
}