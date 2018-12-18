//X - 0 xax // hin arjeqner@ pahum e, 1 angam e chisht xaxum ????????????????

const tdArray = document.getElementsByTagName('td');
const size  = 3;
const len = size * size;

const reset = function() {
    document.getElementsByTagName('button')[0].style.display = 'block';
    document.getElementsByTagName('button')[0].onclick = function () {
        for(let i = 0; i < len; ++i) {
            tdArray[i].innerHTML = "";
        }
    }             
}

const stugum = function(e, arr) {
    let syun = e.target.cellIndex;
    let tox = 0;
    for(let i = syun; i < len; i += size ) {
        if(e.target !== arr[i]) {
            tox++;
        } else {
            break;
        }
    }
    let index = tox * size + syun;

    const entastugum = function (start, limit, step) {
        let result = true;
        for(let k = start; k < limit ; k += step) {
            if(arr[k].textContent !== arr[index].textContent) {
                result = false;
            }
        }
        return result;
    }

    if(entastugum( tox * size, tox * size + size, 1)) {//tox
        reset();
        return alert(`xaxn avartvec haxtec  ${arr[index].innerHTML}`);
    } else if(entastugum(syun, len, size)) { //syun
        reset();
        return alert(`xaxn avartvec haxtec  ${arr[index].innerHTML}`);
    } else if(tox === syun && entastugum(0 , len, size + 1)) { //ankyunagcer
        reset();
        return alert(`xaxn avartvec haxtec  ${arr[index].innerHTML}`);
    } else if(tox + syun === size - 1 && entastugum(size - 1 , len - size + 1, size - 1)) {
        reset();
        return alert(`xaxn avartvec haxtec  ${arr[index].innerHTML}`); 
    } 
}

const x = function() {
    let count = 0;
    let isX = true;
    return function(e){
        if (!e.target.textContent) {
            count++;
            e.target.textContent = isX ? 'X' : '0';
            isX = !isX;   
            if (count === len) {
                return alert(`xaxn avartvec voch voqi `);
            } else  if(count >= size * 2 - 1) {
                stugum(e, tdArray);
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
    drawTable();
    document.getElementsByTagName('button')[0].style.display = 'none'; 
}
