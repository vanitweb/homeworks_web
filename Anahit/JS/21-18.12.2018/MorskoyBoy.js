//Morskoy Boy xax
const size = 10;
const naver = document.getElementsByClassName('nav');
const tdArray = document.getElementsByTagName('td');
let naviQanak4 = 0;
let naviQanak3 = 0;
let naviQanak2 = 0;
let naviQanak1 = 0;
let count = 0;

const texadrmanStugum = function(index, tox, syun) {
    const vandak = tox === 0 || tox === size - 1 || syun === 0 || syun === size - 1;
    if(!vandak){
        if(syun + count > size - 1) { 
            return alert(`aydtex hnaravor che texadrel`);
        } else {
            const index1 = index - size - 1;  
            let isTrue = true;
            for(let step = index1; step <= index1 + 2 * size ; step += size) { 
                for(let k = step; k <= step  + count + 1; ++k) { 
                    if( tdArray[k] === undefined){
                        try {
                            tdArray[k] === undefined;
                        } catch(e) {
                            console.log("keteri mi mas@ dashtic durs e @nkel");
                        }
 
                    } else  if(tdArray[k].innerHTML !== '') { 
                        isTrue = false;
                    }
                }
            } 
            if(isTrue) { 
                for(let step1 = index1; step1 <= index1 + 2 * size ; step1 += size) {
                    for(let k1 = step1; k1 <= step1  + count + 1; ++k1) {  
                        if( tdArray[k1] === undefined){
                            try {
                                tdArray[k1] === undefined;
                            } catch(e) {
                                console.log("keteri mi mas@ dashtic durs e @nkel");
                            }
 
                        } else if(k1 >= index && k1 < index + count) { 
                            tdArray[k1].innerHTML = '*'
                        } else if(tdArray[k1] !== undefined && k1 >= 0) {     
                            tdArray[k1].innerHTML = '.';
                        }
                    } 
                }
       
            } else {
                return alert(`aydtex hnaravor che texadrel`);
            }
        }
    } else {
        console.log(111);
    }
}
const naviTexadrum = function(e) {
    const syun = e.target.cellIndex;
    let tox = 0;
    for(let i = syun; i < size * size; i += size ) {
        if(e.target !== tdArray[i]) {
            tox++;
        } else {
            break;
        }
    } 
    const index = tox * size + syun;    
    texadrmanStugum(index, tox, syun);
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
/* 
const clickNav = function(i, chap, naviQanak) {
    if(naviQanak < i + 1) {
        count = chap;
        naviQanak++;
        if(naviQanak === i + 1) {
            naver[i].style.display = 'none';
        }
    }
} 
*/
const startGame = function () {
    drawTable();
    document.getElementsByTagName('button')[0].style.display = 'none'; 
    document.getElementsByTagName('div')[0].style.display = 'block';
  //    const naver = document.getElementsByClassName('nav');
    naver[0].onclick = function() {
        if(naviQanak4 < 1) {
            count = 4;        
            naviQanak4++;
            if(naviQanak4 === 1) {
                naver[0].style.display = 'none';
            }
        }
    }
    naver[1].onclick =  function() {
        if(naviQanak3 < 2) {
            count = 3;
            naviQanak3++;
            if( naviQanak3 === 2) {
                naver[1].style.display = 'none';
            }
        }
    }
    naver[2].onclick =  function() {
        if(naviQanak2 < 3) {
            count = 2;
            naviQanak2++;
            if(naviQanak2 === 3){
                naver[2].style.display = 'none';
            }
        }
    }
    naver[3].onclick = function() {
        if(naviQanak1 < 4) {
            count = 1;
            naviQanak1++;
            if(naviQanak1 === 4) {
                naver[3].style.display = 'none';
            }
        }
    }
    /*
     naver[0].onclick = clickNav(0, 4, naviQanak4);
     naver[1].onclick = clickNav(1, 3, naviQanak3); 
     naver[2].onclick = clickNav(2, 2, naviQanak2);
     naver[3].onclick = clickNav(3, 1, naviQanak1);
    */
}
