window.onload = function() {
    for (var i = 0; i < 9; i++) {
        document.getElementById('game').innerHTML += '<div class="block"></div>';
    }
    let qayl = 0;

    document.getElementById('game').onclick = function(event) {
        console.log(event);

        if (event.target.className == 'block') {
            if (qayl % 2 == 0) {
                event.target.innerHTML = 'X';
            } else {
                event.target.innerHTML = 'O';
            }
            qayl++;
            check();
        }
    }
    
    function check() {
        let all_block = document.getElementsByClassName('block');
        // X-ri hamar
        if (all_block[3].innerHTML == 'X' && all_block[4].innerHTML == 'X' && all_block[5].innerHTML == 'X') alert("hastec arajin xaxacoxy");
        if (all_block[6].innerHTML == 'X' && all_block[7].innerHTML == 'X' && all_block[8].innerHTML == 'X') alert("hastec arajin xaxacoxy");
        if (all_block[0].innerHTML == 'X' && all_block[3].innerHTML == 'X' && all_block[6].innerHTML == 'X') alert("hastec arajin xaxacoxy");
        if (all_block[1].innerHTML == 'X' && all_block[4].innerHTML == 'X' && all_block[7].innerHTML == 'X') alert("hastec arajin xaxacoxy");
        if (all_block[2].innerHTML == 'X' && all_block[5].innerHTML == 'X' && all_block[8].innerHTML == 'X') alert("hastec arajin xaxacoxy");
        if (all_block[0].innerHTML == 'X' && all_block[4].innerHTML == 'X' && all_block[8].innerHTML == 'X') alert("hastec arajin xaxacoxy");
        if (all_block[2].innerHTML == 'X' && all_block[4].innerHTML == 'X' && all_block[6].innerHTML == 'X') alert("hastec arajin xaxacoxy");
        if (all_block[0].innerHTML == 'X' && all_block[1].innerHTML == 'X' && all_block[2].innerHTML == 'X') alert("hastec arajin xaxacoxy");
        // O-neri hamar
        if (all_block[0].innerHTML == 'O' && all_block[1].innerHTML == 'O' && all_block[2].innerHTML == 'O') alert("hastec erkrord xaxacoxy");
        if (all_block[3].innerHTML == 'O' && all_block[4].innerHTML == 'O' && all_block[5].innerHTML == 'O') alert("hastec erkrord xaxacoxy");
        if (all_block[6].innerHTML == 'O' && all_block[7].innerHTML == 'O' && all_block[8].innerHTML == 'O') alert("hastec erkrord xaxacoxy");
        if (all_block[0].innerHTML == 'O' && all_block[3].innerHTML == 'O' && all_block[6].innerHTML == 'O') alert("hastec erkrord xaxacoxy");
        if (all_block[2].innerHTML == 'O' && all_block[4].innerHTML == 'O' && all_block[6].innerHTML == 'O') alert("hastec erkrord xaxacoxy");
        if (all_block[1].innerHTML == 'O' && all_block[4].innerHTML == 'O' && all_block[7].innerHTML == 'O') alert("hastec erkrord xaxacoxy");
        if (all_block[2].innerHTML == 'O' && all_block[5].innerHTML == 'O' && all_block[8].innerHTML == 'O') alert("hastec erkrord xaxacoxy");
        if (all_block[0].innerHTML == 'O' && all_block[4].innerHTML == 'O' && all_block[8].innerHTML == 'O') alert("hastec erkrord xaxacoxy");
    }
}
<<<<<<< HEAD:Edgar/JsWork/01.12 matrix/main.js
<<<<<<< HEAD
console.log(matrix(3,3));

for(let i = 0; i<9; i++){
	 
}
=======
>>>>>>> 8d47174d13cdeab8186e0cece963da0763594f38
=======



let matrix = function matrix(m = 3, n = 3) {
    var result = []
    for(var i = 0; i < n; i++) {
        result.push(new Array(m).fill(' '))
    }
    return result
}
console.log(matrix(3,3));
>>>>>>> 25dcc39d6a63436f2c8115c0416f8400bb429eb1:Edgar/JsWork/DOM/01.12 matrix/main.js
