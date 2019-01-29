const td = document.getElementsByTagName("td");
const butt = document.getElementsByTagName("button");
let tox,
    syun,
    index;
const sksel = function(){
    const table = document.getElementsByTagName("table")[0];
    for(let i = 0; i < 10; i++){
        let tr = document.createElement("tr");
        table.appendChild(tr);
        for(let j = 0; j < 10; j++){
            let td = document.createElement("td");
            tr.appendChild(td);
        }
    }
    document.getElementsByTagName("button")[0].style.display = "none";
    const krakel = document.createElement("button");
    krakel.setAttribute("onclick", "krakel()")
    krakel.textContent = "krakel";
    document.getElementsByTagName("div")[0].appendChild(krakel);
}
const nav = {
    nav1 : [[], [], [], []],
    nav2 : [[[], []], [[], []], [[], []]],
    nav3 : [[[], [], []], [[], [], []]],
    nav4 : [[], [], [], []],

};
const navak1 = function(){
    for(let i of td){
        i.setAttribute("onclick", "nav1(event)");
    }
}
const navak2 = function(){
    for(let i of td){
        i.setAttribute("onclick", "nav2(event)");
    }
}
const navak3 = function(){
    for(let i of td){
        i.setAttribute("onclick", "nav3(event)");
    }
}
const navak4 = function(){
    for(let i of td){
        i.setAttribute("onclick", "nav4(event)");
    }
}
const stugumTox0 = function(index, navErkar){
    if((syun === 0 || (td[index - 1].textContent === "" && td[index + 9].textContent === "")) 
        && (syun + navErkar === 10 || (td[index + navErkar].textContent === "" && td[index + 10 + navErkar].textContent === ""))){
        let count = 0;
        for(let i = 0; i < navErkar; i++){
            if(td[index + 10 + i].textContent === ""){
                count++
            }
            if(i < navErkar && td[index + i].textContent === ""){
                count++
            }
        }
        if(count === 2 * navErkar){
            return true;
        }
    } 
}
const stugumTox9 = function(index, navErkar){
    if((syun === 0 || (td[index - 1].textContent === "" && td[index - 11].textContent === "")) 
        && (syun + navErkar === 10 || (td[index + navErkar].textContent === "" && td[index - 10 + navErkar].textContent === ""))){
        let count = 0;
        for(let i = 0; i < navErkar; i++){
            if(td[index - 10 + i].textContent === ""){
                count++
            }
            if(i < navErkar && td[index + i].textContent === ""){
                count++
            }
        }
        if(count === 2 * navErkar){
            return true;
        }
    }
}
const stugumSyun0 = function(index, navErkar){
    if(td[index + navErkar].textContent === ""){
        let count = 0;
        for(let i = 0; i < navErkar + 1; i++){
            if(td[index + 10 + i].textContent === ""){
                count++
            }
            if(td[index - 10 + i].textContent === ""){
                count++
            }
            if(i < navErkar && td[index + i].textContent === ""){
                count++
            }
        }
        if(count === 2 * (navErkar + 1) + navErkar){
            return true;
        }
    }  
}
const stugumSyun9 = function(index, navErkar){
    if(td[index - 1].textContent === ""){
        let count = 0;
        for(let i = 0; i < navErkar + 1; i++){
            if(td[index + 10 - i].textContent === ""){
                count++
            }
            if(td[index - 10 - i].textContent === ""){
                count++
            }
            if(i < navErkar && td[index + i].textContent === ""){
                count++
            }
        }
        if(count === 2 * (navErkar + 1) + navErkar){
            return true;
        }
    }    
}
const stugum = function(index, tox, navErkar){
    if(index >= 0 && index < 10){
        return stugumTox0(index, navErkar)
    }else if(tox > 0 && tox < 9 && syun === 0){
        return stugumSyun0(index, navErkar);
    }else if(index >= 90 && index < 100){
        return stugumTox9(index, navErkar);
    }else if(tox > 0 && tox < 9 && syun + navErkar === 10){
        return stugumSyun9(index, navErkar);
    }else{
        if(td[index - 1].textContent === "" && td[index + navErkar].textContent === ""){
            let count = 0;
            for(let i = 0; i < navErkar +2; i++){
                if(td[index + 9 + i].textContent === ""){
                    count++
                }
                if(td[index - 11 + i].textContent === ""){
                    count++
                }
                if(i < navErkar && td[index + i].textContent === ""){
                    count++
                }
            }
            if(count === 2 * (navErkar + 2) + navErkar){
                return true;
            }
        }
    }
}
const nav1Clojure = function(){
    let count = 0;
    return function(e){
        let navErkar = 1;
        syun = e.target.cellIndex;
        tox = e.target.parentElement.rowIndex;
        index = tox * 10 + syun;
        if(e.target.textContent === "" && stugum(index,tox,navErkar) && syun + navErkar <= 10){
            count++; 
            if(count > 4){
                return;
            }
            switch(count){
                case 1:
                    e.target.textContent = "*";
                    nav.nav1[0].push(tox,syun);
                    break;
                case 2:
                    e.target.textContent = "*";
                    nav.nav1[1].push(tox,syun);
                    break;
                case 3:
                    e.target.textContent = "*";
                    nav.nav1[2].push(tox,syun);
                    break;
                case 4:
                    for(let i of td){
                        i.removeAttribute("onclick", "nav1(event)");
                    }
                    document.getElementsByTagName("button")[1].style.display = "none";
                    e.target.textContent = "*";
                    nav.nav1[3].push(tox,syun);
                    break;
            }
        }
    }
}
const nav1 = nav1Clojure();
const nav2Clojure = function(){
    let count = 0;
    return function(e){
        let navErkar = 2;
        syun = e.target.cellIndex;
        tox = e.target.parentElement.rowIndex;
        index = tox * 10 + syun;
        if(e.target.textContent === "" && stugum(index,tox,navErkar) && syun + navErkar <= 10){
            count++; 
            if(count > 3){
                return;
            }
            switch(count){
                case 1:
                    e.target.textContent = "*";
                    td[index + 1].textContent = "*";
                    nav.nav2[0][0].push(tox,syun);
                    nav.nav2[0][1].push(tox,syun + 1);
                    break;
                case 2:
                    e.target.textContent = "*";
                    td[index + 1].textContent = "*";
                    nav.nav2[1][0].push(tox,syun);
                    nav.nav2[1][1].push(tox,syun + 1);
                    break;
                case 3:
                    for(let i of td){
                        i.removeAttribute("onclick", "nav2(event)");
                    }
                    document.getElementsByTagName("button")[2].style.display = "none";
                    e.target.textContent = "*";
                    td[index + 1].textContent = "*";
                    nav.nav2[2][0].push(tox,syun);
                    nav.nav2[2][1].push(tox,syun + 1);
                    break;
            }
        }
    }
}
const nav2 = nav2Clojure();
const nav3Clojure = function(){
    let count = 0;
    return function(e){
        let navErkar = 3;
        syun = e.target.cellIndex;
        tox = e.target.parentElement.rowIndex;
        index = tox * 10 + syun;
        if(e.target.textContent === "" && stugum(index,tox,navErkar) && syun + navErkar <= 10){
            count++; 
            if(count > 2){
                return;
            }
            switch(count){
                case 1:
                    e.target.textContent = "*";
                    td[index + 1].textContent = "*";
                    td[index + 2].textContent = "*";
                    nav.nav3[0][0].push(tox,syun);
                    nav.nav3[0][1].push(tox,syun + 1);
                    nav.nav3[0][2].push(tox,syun + 2);
                    break;
                case 2:
                    for(let i of td){
                        i.removeAttribute("onclick", "nav3(event)");
                    }
                    document.getElementsByTagName("button")[3].style.display = "none";
                    e.target.textContent = "*";
                    td[index + 1].textContent = "*";
                    td[index + 2].textContent = "*";
                    nav.nav3[1][0].push(tox,syun);
                    nav.nav3[1][1].push(tox,syun + 1);
                    nav.nav3[1][2].push(tox,syun + 2);
                    break;
            }
        }
    }
}
const nav3 = nav3Clojure();
const nav4Clojure = function(){
    let count = 0;
    return function(e){
        let navErkar = 4;
        syun = e.target.cellIndex;
        tox = e.target.parentElement.rowIndex;
        index = tox * 10 + syun;
        if(e.target.textContent === "" && stugum(index,tox,navErkar) && syun + navErkar <= 10){
            count++; 
            if(count > 1){
                return;
            }
            switch(count){
                case 1:
                    for(let i of td){
                        i.removeAttribute("onclick", "nav3(event)");
                    }
                    document.getElementsByTagName("button")[4].style.display = "none";
                    e.target.textContent = "*";
                    td[index + 1].textContent = "*";
                    td[index + 2].textContent = "*";
                    td[index + 3].textContent = "*";
                    nav.nav4[0].push(tox,syun);
                    nav.nav4[1].push(tox,syun + 1);
                    nav.nav4[2].push(tox,syun + 2);
                    nav.nav4[3].push(tox,syun + 3);
                    break;
            }
        }
    }
}
const nav4 = nav4Clojure();
const krakel = function(){
    for(let i of td){
        i.textContent = "";
        i.setAttribute("onclick","xaxacox(event)");
    }
}
const xaxacox = function(e){
    if(!e.target.textContent){
        e.target.textContent = 0;
    }
    krakelStugum(e)
}
const nav1Stugum = function(e){
    for(let i in nav.nav1){
        if(nav.nav1[i][0] === tox && nav.nav1[i][1] === syun){
            e.target.textContent = 1;
            nav.nav1.splice(i, 1);
        }
    }
}
const nav2Stugum = function(e){
    for(let i in nav.nav2){
        for(let j in nav.nav2[i]){
            if(nav.nav2[i][j][0] === tox && nav.nav2[i][j][1] === syun){
                e.target.textContent = 2;
                nav.nav2[i].splice(j, 1);
            }  
        }
        if(nav.nav2[i].length === 0){
            nav.nav2.splice(i, 1)
        }
    }    
}
const nav3Stugum = function(e){
    for(let i in nav.nav3){
        for(let j in nav.nav3[i]){
            if(nav.nav3[i][j][0] === tox && nav.nav3[i][j][1] === syun){
                e.target.textContent = 3;
                nav.nav3[i].splice(j, 1);
            }   
        }
        if(nav.nav3[i].length === 0){
            nav.nav3.splice(i, 1);
        }
    }
}
const nav4Stugum = function(e){
    for(let i in nav.nav4){
        if(nav.nav4[i][0] === tox && nav.nav4[i][1] === syun){
            e.target.textContent = 4;
            nav.nav4.splice(i, 1);
        }
    }
}
const krakelStugum = function(e){
    let count = 0;
    for(let i in td){
        if(td[i] === e.target){
            tox = parseInt(i/10);
            syun = i - tox * 10;
        }
    }
    if(nav.nav1.length !== 0){
            nav1Stugum(e);
    }
    if(nav.nav2.length !== 0 && e.target.textContent !== "2"){
        nav2Stugum(e);
    }
    if(nav.nav3.length !== 0 && e.target.textContent !== "3"){
        nav3Stugum(e);
    }
    if(nav.nav4.length !== 0 && e.target.textContent !== "4"){
        nav4Stugum(e)
    }
    for(let i in nav){
        if(nav[i].length === 0){
            count++;
        }
    }
    if(count === 4){
        document.getElementsByTagName("table")[0].style.display = "none";
        document.getElementsByTagName("div")[0].textContent = "Haxtanak";
    }
}