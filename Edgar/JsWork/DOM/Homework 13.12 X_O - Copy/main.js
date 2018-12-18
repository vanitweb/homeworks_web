let restarButton = document.querySelector('#restart');
restarButton.addEventListener("click", restartGame);

var currentGamerElem = document.querySelector('#turnon');

var cells = getFieldCells("#field td");
var gamerTurn = getDefaultgamer();
prepareField();

function prepareField() {
    activeCells(cells); // aktiv acnel dashtery

    gamerTurn = getDefaultgamer();
    showCurrentGamer(gamerTurn, currentGamerElem); //cuyc tal tvyal pahi xaxacoxin
}

function getFieldCells(selector) {
    return document.querySelectorAll(selector);
}
//patrastel dashty


function activeCells(cell) {
    for (var i = 0; i < cells.length; i++) {
        cells[i].textContent = '';
        cells[i].addEventListener("click", nextStep);
    }
}

//lracnel dashty nshvac xaxacoxi nshanov
function nextStep() {
    let cell = this;

    fillCell(cell, gamerTurn);
    gamerTurn = getNextGamer(gamerTurn);

    showCurrentGamer(gamerTurn, currentGamerElem);

    diactiveCell(cell); // grvac dashty argelapakel

    var winner = chekWin(cells);
    if (winner != false || checkDraw(cells)) { // ete haxtox ka avartel xaxy
        endGame(cells, winner, currentGamerElem);
    }
}

function endGame(cells, winner, currentGamerElem) {
    stopGame(cells);
    showWinner(winner);
    showCurrentGamer('-', currentGamerElem);
}

function restartGame() {
    prepareField();
}

function showWinner(winner) {
    if (winner !== false) {
        alert(winner + "'s Wins");
    } else {
        alert("draw game");
    }
}

function diactiveCell(cell, ) {
    cell.removeEventListener("click", nextStep);
}

function fillCell(cell, content) {
    cell.textContent = content;
}

function getNextGamer(gamerTurn) {
    if (gamerTurn == "X") {
        return "O";
    } else {
        return "X";
    }
}

function stopGame(cells) {
    for (var i = 0; i < cells.length; i++) {
        cells[i].removeEventListener("click", nextStep);
    }
}

function showWinner(name) {
    alert(name + "'s Wins");
}

function showCurrentGamer(name, elem) {
    elem.textContent = name;
}

function getDefaultgamer() {
    return "X";
}

//false "X", "O"
function chekWin(cells) {
    var winnerCombo = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (var i = 0; i < winnerCombo.length; i++) {
        let wc = winnerCombo[i];
        if (cells[wc[0]].textContent == cells[wc[1]].textContent &&
            cells[wc[1]].textContent == cells[wc[2]].textContent &&
            cells[wc[0]].textContent != '') {
            return cells[wc[0]].textContent;
        }
    }
    return false;
}

function checkDraw(cells) {
    for (var i = 0; i < cells.length; i++) {
        if (cells[i].textContent == '') {
            return false;
        }
    }
    return true;
}