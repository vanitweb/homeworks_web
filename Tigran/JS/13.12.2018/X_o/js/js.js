const Start_game = function () {
    gcel();
    // if (qanak >= 5) {
    //     stugel();
    // }
}

const gcel = function() {
        let table = document.getElementsByTagName("TABLE")[0];
        const qanak = 10;
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
    }

let qanak = 0;
const nshel = function(a) {
    if (!a.target.textContent) {
        if (qanak%2 === 0) {
            a.target.textContent = "X";
        }else{
            a.target.textContent = "O";
        }
        qanak++;
        // let syugmanVaxt = document.getElementsByTagName("TD").length;
        // syugmanVaxt = 2 * Math.sqrt(syugmanVaxt) - 1;

        let syugmanVaxt = 5;
        if (qanak >= syugmanVaxt) {
            stugel(a);
            // console.log(syugmanVaxt);
        }
    }
}
const stugel = function (/*nshan*/) {
    let tds = document.getElementsByTagName("TD");
    let qani = 0;
    for (let i = 0; i < Math.sqrt(tds.length); i++) {
        for (let j = 0; j < tds.length; j+= Math.sqrt(tds.length)) {
           console.log(j+i,i);
           if(/*nshan.target.textContent*/"X" === tds[j+i].textContent) {
                qani++;
                // console.log(qani);

           } 
        }
    }
    // console.log(nshan.target.textContent)
    console.log(qani,qani+45);
}





