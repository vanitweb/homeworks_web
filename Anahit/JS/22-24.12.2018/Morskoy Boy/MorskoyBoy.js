//Morskoy Boy xax
const size = 10;
const naver = document.getElementsByClassName('nav');
const tdArray = document.getElementsByTagName('td');
let naviQanak4 = 0;
let naviQanak3 = 0;
let naviQanak2 = 0;
let naviQanak1 = 0;
let count = 0;
let naviHatikneriQanak = 0;
const toxFun = function(tox, syun, simbol) {
    let syun1 = syun;
    while(syun1 + count <= size){
        const index = tox * size + syun;
	for(let k = index; k < index + count; ++k){
            if( tdArray[k] === undefined) {
                try {
                    tdArray[k] === undefined;
                } catch(e) {
                    console.log("keteri mi mas@ dashtic durs e @nkel");
                }
            } else {
                tdArray[k].innerHTML = simbol;
            } 
            syun1++;
        }
    }
}
const syunFun = function(tox, syun) {
     const index = tox * size + syun;
     for(let k = index; k <= index + 2 * size; k += size) {
         if( tdArray[k] === undefined) {
             try {
                 tdArray[k] === undefined;
             } catch(e) {
                 console.log("keteri mi mas@ dashtic durs e @nkel");
             }
          } else {
              tdArray[k].innerHTML = '.';
	  } 
     }
}
const texadrmanStugum = function(tox, syun) {
    const vandak = tox === 0 || tox === size - 1 || syun === 0 || syun === size - 1;
    const index = tox * size + syun;
    let index1;
    if(syun === 0){
        index1 = index - size;
    } else {
        index1 = index - size - 1;
    }
    let isTrue = true;
    if(syun + count > size) { 
        return alert(`aydtex hnaravor che texadrel`);
    } else {
        for(let step = index1; step <= index1 + 2 * size ; step += size) { 
            for(let k = step; k <= step  + count + 1; ++k) { 
               if(k % (size - 1) === 0) {
                   break;
               }
                if( tdArray[k] === undefined) {
                    try {
                        tdArray[k] === undefined;
                    } catch(e) {
                        console.log("keteri mi mas@ dashtic durs e @nkel");
                    }
                } else if(tdArray[k].innerHTML === '*') { 
                    isTrue = false;
                }
            }
        } 
        if(!vandak && isTrue) {
            toxFun(tox - 1, syun , '.');
            toxFun(tox, syun, '*');
            toxFun(tox + 1, syun, '.');
            syunFun(tox - 1, syun - 1);
            if(syun + count != size) {
                syunFun(tox - 1, syun + count);
            }
        } else if(isTrue && tox === 0) {
            toxFun(tox, syun, '*');
            toxFun(tox + 1, syun, '.');
            if(syun != 0) {
                syunFun(tox - 1, syun - 1);
            } else if(syun != size - 1) {
                syunFun(tox - 1, syun + count);
            }
        } else if(isTrue && tox === size - 1) {
            toxFun(tox, syun, '*');
            toxFun(tox - 1, syun , '.');
            if(syun != 0) {
                syunFun(tox - 1, syun - 1);
            } else if(syun != size - 1) {
                syunFun(tox - 1, syun + count);
            }
        } else if(isTrue && syun === 0) {
            toxFun(tox, syun, '*');
            toxFun(tox + 1, syun, '.');
            toxFun(tox - 1, syun , '.');
            syunFun(tox - 1, syun + count);
        } else if(isTrue && syun === size - 1) {
            toxFun(tox, syun, '*');
            toxFun(tox + 1, syun, '.');
            toxFun(tox - 1, syun , '.');
            syunFun(tox - 1, syun - 1);
        } else if(!isTrue) {     
            return alert(`aydtex hnaravor che texadrel`);
        }
    } 
    count = 0;
}
const naviTexadrum = function(e) {
    if(count != 0) {
        const syun = e.target.cellIndex;
        let tox = 0;
        for(let i = syun; i < size * size; i += size ) {
            if(e.target !== tdArray[i]) {
                tox++;
            } else {
                break;
            }
        } 
        texadrmanStugum(tox, syun);
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
const start = function () {
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
const startGame = function() {
    const kordinat = prompt("mutqagrel kordinatner", "tox syun");
    if (kordinat != null) {
        naviHatikneriQanak++;
        const arr = kordinat.split(" "); 
        const tox = parseInt(arr[0]);
        const syun = parseInt(arr[1]);
        const index = tox * size + syun;
        if(tdArray[index].innerHTML === '*') {
            tdArray[index].innerHTML = '-'; 
            alert("duq dipel eq navi");
        } else {
            alert("duq vripel eq");
        }
        if(naviHatikneriQanak >= 4 + 3 * 2 + 2 * 3 + 4 * 1 ) {
            let astxanishiQanak = 0;
            for(let i = 0; i < size * size; i++) {
                if(tdArray[i].innerHTML === '*') {
                    astxanishiQanak++;
                }
            }
            if(astxanishiQanak === 0) {
                alert("haxtanak");
                setTimeout(function(){ location.reload(); }, 5000);
            }
        }
    }
}
