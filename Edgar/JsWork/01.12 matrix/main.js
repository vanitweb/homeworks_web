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
        if (all_block[0].innerHTML == 'X' && all_block[1].innerHTML == 'X' && all_block[2].innerHTML == 'X') alert("hastec arajin xaxacoxy");
        if (all_block[3].innerHTML == 'X' && all_block[4].innerHTML == 'X' && all_block[5].innerHTML == 'X') alert("hastec arajin xaxacoxy");
        if (all_block[6].innerHTML == 'X' && all_block[7].innerHTML == 'X' && all_block[8].innerHTML == 'X') alert("hastec arajin xaxacoxy");
        if (all_block[0].innerHTML == 'X' && all_block[3].innerHTML == 'X' && all_block[6].innerHTML == 'X') alert("hastec arajin xaxacoxy");
        if (all_block[1].innerHTML == 'X' && all_block[4].innerHTML == 'X' && all_block[7].innerHTML == 'X') alert("hastec arajin xaxacoxy");
        if (all_block[2].innerHTML == 'X' && all_block[5].innerHTML == 'X' && all_block[8].innerHTML == 'X') alert("hastec arajin xaxacoxy");
        if (all_block[0].innerHTML == 'X' && all_block[4].innerHTML == 'X' && all_block[8].innerHTML == 'X') alert("hastec arajin xaxacoxy");
        if (all_block[2].innerHTML == 'X' && all_block[4].innerHTML == 'X' && all_block[6].innerHTML == 'X') alert("hastec arajin xaxacoxy");
        // O-neri hamar
        if (all_block[0].innerHTML == 'O' && all_block[1].innerHTML == 'O' && all_block[2].innerHTML == 'O') alert("hastec erkrord xaxacoxy");
        if (all_block[3].innerHTML == 'O' && all_block[4].innerHTML == 'O' && all_block[5].innerHTML == 'O') alert("hastec erkrord xaxacoxy");
        if (all_block[6].innerHTML == 'O' && all_block[7].innerHTML == 'O' && all_block[8].innerHTML == 'O') alert("hastec erkrord xaxacoxy");
        if (all_block[0].innerHTML == 'O' && all_block[3].innerHTML == 'O' && all_block[6].innerHTML == 'O') alert("hastec erkrord xaxacoxy");
        if (all_block[1].innerHTML == 'O' && all_block[4].innerHTML == 'O' && all_block[7].innerHTML == 'O') alert("hastec erkrord xaxacoxy");
        if (all_block[2].innerHTML == 'O' && all_block[5].innerHTML == 'O' && all_block[8].innerHTML == 'O') alert("hastec erkrord xaxacoxy");
        if (all_block[0].innerHTML == 'O' && all_block[4].innerHTML == 'O' && all_block[8].innerHTML == 'O') alert("hastec erkrord xaxacoxy");
        if (all_block[2].innerHTML == 'O' && all_block[4].innerHTML == 'O' && all_block[6].innerHTML == 'O') alert("hastec erkrord xaxacoxy");
    }
}
