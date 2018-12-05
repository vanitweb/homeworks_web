let haxtanak = false;
let step = 0;
window.onload = function() {
    for (let i = 0; i < 9; i++) {
        document.getElementById('game').innerHTML += '<div class="block"></div>';
    }
    document.getElementById('game').onclick = function(event) {
        console.log(event);
        if (event.target.className == 'block' && event.target.innerHTML == '') {
            if (step % 2 == 0) {
                event.target.innerHTML = 'X';
            } else {
                event.target.innerHTML = 'O';
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
        if (block[0].innerHTML == 'X' && block[1].innerHTML == 'X' && block[2].innerHTML == 'X') {
			alert("hastec X-erov xaxacox@");
			haxtanak = true;
		}
        if (block[3].innerHTML == 'X' && block[4].innerHTML == 'X' && block[5].innerHTML == 'X') {
			alert("hastec X-erov xaxacox@");
			haxtanak = true;
		}
        if (block[6].innerHTML == 'X' && block[7].innerHTML == 'X' && block[8].innerHTML == 'X') {
			alert("hastec X-erov xaxacox@");
			haxtanak = true;
		}
        if (block[0].innerHTML == 'X' && block[3].innerHTML == 'X' && block[6].innerHTML == 'X') {
			alert("hastec X-erov xaxacox@");
			haxtanak = true;
		}
        if (block[1].innerHTML == 'X' && block[4].innerHTML == 'X' && block[7].innerHTML == 'X') {
			alert("hastec X-erov xaxacox@");
			haxtanak = true;
		}
        if (block[2].innerHTML == 'X' && block[5].innerHTML == 'X' && block[8].innerHTML == 'X') {
			alert("hastec X-erov xaxacox@");
			haxtanak = true;
		}
        if (block[0].innerHTML == 'X' && block[4].innerHTML == 'X' && block[8].innerHTML == 'X') {
			alert("hastec X-erov xaxacox@");
			haxtanak = true;
		}
        if (block[2].innerHTML == 'X' && block[4].innerHTML == 'X' && block[6].innerHTML == 'X') {
			alert("hastec X-erov xaxacox@");
			haxtanak = true;
		}
        if (block[0].innerHTML == 'O' && block[1].innerHTML == 'O' && block[2].innerHTML == 'O') {
			alert("hastec O-erov xaxacox@");
			haxtanak = true;
		}
        if (block[3].innerHTML == 'O' && block[4].innerHTML == 'O' && block[5].innerHTML == 'O') {
			alert("hastec O-erov xaxacox@");
			haxtanak = true;
		}
        if (block[6].innerHTML == 'O' && block[7].innerHTML == 'O' && block[8].innerHTML == 'O') {
			alert("hastec O-erov xaxacox@");
			haxtanak = true;
		}
        if (block[0].innerHTML == 'O' && block[3].innerHTML == 'O' && block[6].innerHTML == 'O') {
			alert("hastec O-erov xaxacox@");
			haxtanak = true;
		}
        if (block[1].innerHTML == 'O' && block[4].innerHTML == 'O' && block[7].innerHTML == 'O') {
			alert("hastec O-erov xaxacox@");
			haxtanak = true;
		}
        if (block[2].innerHTML == 'O' && block[5].innerHTML == 'O' && block[8].innerHTML == 'O') {
			alert("hastec O-erov xaxacox@");
			haxtanak = true;
		}
        if (block[0].innerHTML == 'O' && block[4].innerHTML == 'O' && block[8].innerHTML == 'O') {
			alert("hastec O-erov xaxacox@");
			haxtanak = true;
		}
        if (block[2].innerHTML == 'O' && block[4].innerHTML == 'O' && block[6].innerHTML == 'O') {
			alert("hastec O-erov xaxacox@");
			haxtanak = true;
		}
		if(step === 8 && !haxtanak) {
			alert("xaxn avartvec voch voqi");
			reset();
		}
    }
}

function reset() {
	let blocks = document.getElementsByClassName('block');
	for(let i = 0; i < 9; i++){
		blocks[i].innerHTML = '';
	}
	haxtanak = false;
	step = 0;
}