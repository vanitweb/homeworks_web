const td = document.getElementsByTagName("td");
let tox,
    syun;
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
    const noric = document.createElement("button");
    noric.setAttribute("onclick", "noric()")
    noric.textContent = "noric";
    document.getElementsByTagName("body")[0].appendChild(noric);
}
const nav = {
    nav1 : [[], [], [], []],
    nav2 : [[[], []], [[], []], [[], []]],
    nav3 : [[[7, 3], [8, 3], [9, 3]], [[3, 4], [3, 5], [3, 6]]],
    nav4 : [[6, 7], [7, 7], [8, 7], [9, 7]],

};
const navak1 = function(){
    for(let i of td){
        i.setAttribute("onclick", "nav1(event)");
    }
}
const nav1Clojure = function(){
    let count = -1;
    return function(e){
        syun = e.target.cellIndex;
        for(let i in td){
            if(td[i] === e.target){
                tox = parseInt(i/10);
            }
        }
        if(e.target.textContent === ""){
            count++; 
            if(count > 3){
                return;
            }
    
            switch(count){
                case 0:
                    e.target.textContent = "1";
                    nav.nav1[0].push(tox,syun);
                    break;
                case 1:
                    e.target.textContent = "1";
                    nav.nav1[1].push(tox,syun);
                    break;
                case 2:
                    e.target.textContent = "1";
                    nav.nav1[2].push(tox,syun);
                    break;
                case 3:
                    e.target.textContent = "1";
                    nav.nav1[3].push(tox,syun);
                    break;
            }
            console.log(count)  
        }
    }
}
const nav1 = nav1Clojure()
//const nav2Clojure = function(){
//    let count = -1;
//    return function(e){
//        count++; 
//        if(count > 2){
//            return;
//        }
//        switch(count){
//            case 0:
//                e.target.textContent = "2";
//                nav.nav2[0][0].push(tox,syun);
//                break;
//            case 1:
//                e.target.textContent = "2";
//                nav.nav2[0][1].push(tox,syun);
//                break;
//            case 2:
//                e.target.textContent = "2";
//                nav.nav1[1][0].push(tox,syun);
//                break;
//            case 3:
//                e.target.textContent = "2";
//                nav.nav1[1][1].push(tox,syun);
//                break;
//            case 4:
//                e.target.textContent = "2";
//                nav.nav1[2][0].push(tox,syun);
//                break;
//            case 5:
//                e.target.textContent = "2";
//                nav.nav1[2][1].push(tox,syun);
//                break;
//            case 6:
//                e.target.textContent = "2";
//                nav.nav1[3][0].push(tox,syun);
//                break;
//            case 7:
//                e.target.textContent = "2";
//                nav.nav1[3][1].push(tox,syun);
//                break;
//        }
//        console.log(count)
//    }
//}
//const nav2 = nav2Clojure()
//const xaxacox = function(e){
//    for(let i in td){
//        if(td[i] === e.target){
//            tox = parseInt(i / 10);
//            syun = i - tox * 10;
//        }
//    }
//    if(e.target.textContent){
//        nav1(e);   
//    }
//}
