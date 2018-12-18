const Start_game = function () {
    gcel();
}
let qanak;

const gcel = function(noric) {
        const table = document.getElementsByTagName("TABLE")[0];
        if (noric) {
            table.innerHTML = "";
        }
        qanak = parseInt(prompt());
        for (let i = 0; i < qanak; i++) {
            let tr = document.createElement("TR");
            table.appendChild(tr);
            for (let j = 0; j < qanak; j++) {
                let td = document.createElement("TD");
                td.setAttribute("onclick", "nshel(event)");
                tr.appendChild(td);
            }
        }
        // console.log(table);
        return qanak;
    }

let qayl = 0;
const nshel = function(a) {
    if (!a.target.textContent) {
        if (qayl%2 === 0) {
            a.target.textContent = "X";
        }else{
            a.target.textContent = "O";
        }
        qayl++;
        let syugmanVaxt =  2 * qanak - 1;
        if (qayl >= syugmanVaxt) {
            stugel(a);
            // console.log(syugmanVaxt);
        }
    }
}
const stugel = function (a) {
    let tds = document.getElementsByTagName("TD");
    let qani = 0;
    let y,x;
    let count = 0;
    for(let i in tds){
        if (tds[i] === a.target) {
            y = parseInt(i/qanak);
            x = i - y * qanak;
        }
    }
    console.log(y,x);
    for (let i = x; i < tds.length; i+= qanak) {
        if (tds[i].textContent === a.target.textContent) { //vertikal
            count++;
        }
    }
    if (count === qanak) {
            setTimeout(function(){alert(`haxtec ${a.target.textContent}`); /*gcel(true)*/},1);
            return;
    }
    count = 0;
    
    for (let i = y*qanak; i < qanak; i++) {
        if (tds[i].textContent === a.target.textContent) { //horizonakan
            count++;
        }
    }
    if (count === qanak) {
            setTimeout(function(){alert(`haxtec ${a.target.textContent}`); gcel(true)}, 1);
            return;
    }
    count = 0;

    if (x === y) {
       for (let i = 0; i < qanak; i++) {
               if(a.target.textContent === tds[i+(i*qanak)].textContent) {  //glxavor ankyunagic
                    count++;
               }
        }
        if (count === qanak) {
                setTimeout(function(){alert(`haxtec ${a.target.textContent}`); gcel(true)},1);
                return;
        }
        count = 0; 
    }else if (x === (qanak - 1 - y)) {
        for (let i = 1; i <= qanak; i++) {
           if(a.target.textContent === tds[i*(qanak-1)].textContent) {     //ankyunagic
                count++; 
           }
        }
        if (count === qanak) {
                a.target.textContent;
                setTimeout(function(){alert(`haxtec ${a.target.textContent}`); gcel(true)},1);
                return;
            }
        count = 0;
    }
}


/////////////////////////////////////////sarqel ' noric@, alert@, xaxi avart@





