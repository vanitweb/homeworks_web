//X - 0 xax // hin arjeqner@ pahum e, 1 angam e chisht xaxum ????????????????

const tdArray = document.getElementsByTagName('td');
const size  = 3;
const len = size * size;
let count = 0;
const stugum = function(e) {
    const syun = e.target.cellIndex;
    let tox = 0;
    for(let i = syun; i < len; i += size ) {
        if(e.target !== tdArray[i]) {
            tox++;
        } else {
            break;
        }
    }
    const index = tox * size + syun;

    const entastugum = function (start, limit, step) {
        let result = true;
        for(let k = start; k < limit ; k += step) {
            if(tdArray[k].textContent !== tdArray[index].textContent) {
                result = false;
            }
        }
        return result;
    }
    const toxovHaxtanak = entastugum( tox * size, tox * size + size, 1);
    const syunovHaxtanak = entastugum(syun, len, size);
    const ankyunagcovHaxtanak1 = tox === syun && entastugum(0 , len, size + 1);
    const ankyunagcovHaxtanak2 = tox + syun === size - 1 && entastugum(size - 1 , len - size + 1, size - 1);
    const haxtanak = toxovHaxtanak || syunovHaxtanak || ankyunagcovHaxtanak1 || ankyunagcovHaxtanak2;
    if(haxtanak) {
        document.getElementsByTagName('button')[0].style.display = 'block';
        return alert(`xaxn avartvec haxtec  ${tdArray[index].innerHTML}`); 
    } 
}
const x = function() {
    let isX = true;
    return function(e){
        if (!e.target.textContent) {
            count++;
            e.target.textContent = isX ? 'X' : '0';
            isX = !isX;   
            if(count >= size * 2 - 1) {
                stugum(e);
            }
            if (count === len) {
                document.getElementsByTagName('button')[0].style.display = 'block';
                return alert(`xaxn avartvec voch voqi `);
            }
        }
    }
}
const setValue = x();
const drawTable = function() {
    const table = document.getElementsByTagName('table')[0];
    for(let i = 0; i < size; ++i) {
        const tr = document.createElement('tr');
        for(let j = 0; j < size; ++j) {
            const td = document.createElement('td');
            td.setAttribute('onclick', 'setValue(event)');
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
const startGame = function() {
    if(document.getElementsByTagName('td').length) {
        count = 0;
        for(let i = 0; i < len; ++i) {
            tdArray[i].innerHTML = "";
        } 
        
    } else {
        drawTable();
    }
    document.getElementsByTagName('button')[0].style.display = 'none'; 
}
