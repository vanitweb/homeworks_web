//Morskoy Boy xax
const size = 10;
const tdArray = document.getElementsByTagName('td');
let naviQanak4 = 0;
let naviQanak3 = 0;
let naviQanak2 = 0;
let naviQanak1 = 0;
let count = 0;
const naviTexadrum = function(e) {
    /*let count = 0;
    const naver = document.getElementsByClassName('nav');
    naver[0].onclick = function() {
        naviQanak4++; console.log(11111);
        if(naviQanak4 < 2) {
            count = 4;
        }
    }
    naver[1].onclick =  function() {
        naviQanak++;
        if(naviQanak3 < 3) {
            count = 3;
        }
    }
    naver[2].onclick =  function() {
        naviQanak2++;
        if(naviQanak2 < 4) {
            count = 2;
        }
    }
    naver[3].onclick = function() {
        naviQanak1++;
        if(naviQanak1 < 5) {
            count = 1;
        }
    }*/
    const syun = e.target.cellIndex;
    let tox = 0;
    for(let i = syun; i < size * size; i += size ) {
        if(e.target !== tdArray[i]) {
            tox++;
        } else {
            break;
        }
    } 
    console.log(count);
      console.log(tox);
      console.log(syun);   console.log(index);
    const index = tox * size + syun;
    for(let k = index; k < index + count; ++k) {
        tdArray[k] = '*';
    }
}
const drawTable = function() {
    const table = document.getElementsByTagName('table')[0];
    for(let i = 0; i < size; ++i) {
        const tr = document.createElement('tr');
        for(let j = 0; j < size; ++j) {
            const td = document.createElement('td');
            td.setAttribute('onclick', 'naviTexadrum(event)');
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

const startGame = function () {
    drawTable();
    document.getElementsByTagName('button')[0].style.display = 'none'; 
    document.getElementsByTagName('div')[0].style.display = 'block';
    let count = 0;
    const naver = document.getElementsByClassName('nav');
    naver[0].onclick = function() {
        naviQanak4++; console.log(naviQanak4);
        if(naviQanak4 < 1) {
            count = 4;
        } else {
            naver[0].style.display = 'none';
        }
    }
    naver[1].onclick =  function() {
        naviQanak3++;
        if(naviQanak3 < 2) {
            count = 3;
        } else {
            naver[1].style.display = 'none';
        }
    }
    naver[2].onclick =  function() {
        naviQanak2++;
        if(naviQanak2 < 3) {
            count = 2;
        } else {
            naver[2].style.display = 'none';
        }
    }
    naver[3].onclick = function() {
        naviQanak1++;
        if(naviQanak1 < 4) {
            count = 1;
        } else {
            naver[3].style.display = 'none';
        }
    }

}
