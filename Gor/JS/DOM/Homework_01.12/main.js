let haxtanak = false;
let step = 0;
const boxSize = 3;
window.onload = function() {
    for (let i = 0; i < boxSize * boxSize; i++) {
        document.getElementById('game').innerHTML += '<div class="block"></div>';
    }
    document.getElementById('game').onclick = function(event) {
        console.log(event);
        if (event.target.className == 'block' && event.target.textContent == '') {
            if (step % 2 == 0) {
                event.target.textContent = 'X';
            } else {
                event.target.textContent = 'O';
            }
            step++;
            check();
        }
    }
    function check() {
        let block = document.getElementsByClassName('block');
		if(haxtanak) {
			alert("Xaxn avartvec");
			reset();
		}
		if(step >= 5) {
			//check rows
			for(let i = 0; i < boxSize * boxSize; i += 3) {
				if(block[i].textContent === block[i + 1].textContent && block[i].textContent === block[i + 2].textContent && block[i].textContent !== '') {
					alert(`haxtec ${block[i].textContent} xaxacox@`);
					haxtanak = true;
				}
			}
			//check cols
			for(let i = 0; i < boxSize; i++) {
				if(block[i].textContent === block[i + boxSize].textContent && block[i].textContent === block[i + 2 * boxSize].textContent && block[i].textContent !== '') {
					alert(`haxtec ${block[i].textContent} xaxacox@`);
					haxtanak = true;
				}
			}
			if(block[0].textContent === block[4].textContent && block[0].textContent === block[8].textContent && block[0].textContent !=='') {
				alert(`haxtec ${block[0].textContent} xaxacox@`);
				haxtanak = true;
			} else if(block[6].textContent === block[4].textContent && block[6].textContent === block[2].textContent && block[4].textContent !=='') {
				alert(`haxtec ${block[6].textContent} xaxacox@`);
				haxtanak = true;
			}
		}
		if(step === boxSize * boxSize && !haxtanak) {
			alert("xaxn avartvec voch voqi");
			reset();
		}
    }
}

function reset() {
	let blocks = document.getElementsByClassName('block');
	for(let i = 0; i < boxSize * boxSize; i++){
		blocks[i].textContent = '';
	}
	haxtanak = false;
	step = 0;
}