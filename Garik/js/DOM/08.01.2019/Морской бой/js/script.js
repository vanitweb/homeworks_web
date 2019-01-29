const nav = {
    nav1 : [[0, 0], [2, 8], [7, 9], [5, 4]],
    nav2 : [[[0, 3], [1, 3]], [[8, 0], [9, 0]], [[4, 1], [4, 2]]],
    nav3 : [[[7, 3], [8, 3], [9, 3]], [[3, 4], [3, 5], [3, 6]]],
    nav4 : [[6, 7], [7, 7], [8, 7], [9, 7]],

};
const td = document.getElementsByTagName("td");
const sksel = function(){
    const table = document.getElementsByTagName("table")[0];
    for(let i = 0; i < 10; i++){
        let tr = document.createElement("tr");
        table.appendChild(tr);
        for(let j = 0; j < 10; j++){
            let td = document.createElement("td");
            td.setAttribute("onclick","xaxacox(event)")
            tr.appendChild(td);
        }
    }
    document.getElementsByTagName("button")[0].style.display = "none";
    const noric = document.createElement("button");
    noric.setAttribute("onclick", "noric()")
    noric.textContent = "noric";
    document.getElementsByTagName("body")[0].appendChild(noric);
}
const xaxacox = function(e){
    if(!e.target.textContent){
        e.target.textContent = 0;
    }
    stugum(e)
}
const nav1 = function(e){
    for(let i in nav.nav1){
        if(nav.nav1[i][0] === tox && nav.nav1[i][1] === syun){
            e.target.textContent = 1;
            nav.nav1.splice(i, 1);
        }
    }
    console.log(1,nav.nav1)
}
const nav2 = function(e){
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
    console.log(2,nav.nav2)
}
const nav3 = function(e){
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
    console.log(3,nav.nav3)
}
const nav4 = function(e){
    for(let i in nav.nav4){
        if(nav.nav4[i][0] === tox && nav.nav4[i][1] === syun){
            e.target.textContent = 4;
            nav.nav4.splice(i, 1);
        }
    }
    console.log(4,nav.nav4)
}
const stugum = function(e){
    let count = 0;
    for(let i in td){
        if(td[i] === e.target){
            tox = parseInt(i/10);
            syun = i - tox * 10;
        }
    }
    if(nav.nav1.length !== 0){
        if(e.target.textContent === "1"){
            return   
        }else{
            nav1(e);
        }
    }
    if(nav.nav2.length !== 0 && e.target.textContent !== "2"){
        nav2(e);
    }
    if(nav.nav3.length !== 0 && e.target.textContent !== "3"){
        nav3(e);
    }
    if(nav.nav4.length !== 0 && e.target.textContent !== "4"){
        nav4(e)
    }
    for(let i in nav){
        if(nav[i].length === 0){
            count++;
        }
    }
    if(count === 4){
        document.getElementsByTagName("button")[1].onclick = function(){
            location.reload();
        }
        document.getElementsByTagName("table")[0].textContent = "Haxtanak";
        
    }
}
const noric = function(){
    for(let i in td){
        td[i].textContent = "";
    }
}
// nuyni vra ktacneluc taza kanchuma