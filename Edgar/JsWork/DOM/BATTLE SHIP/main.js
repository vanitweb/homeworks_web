const td = document.getElementsByTagName("td");

function start (){
    const table = document.getElementsByTagName("table")[0];
    for(let i = 0; i < 7; i++){
        let tr = document.createElement("tr");
        table.appendChild(tr);
        for(let j = 0; j < 7; j++){
            let td = document.createElement("td");
            var myID = document.createElement("id");
            myID.setAttribute("value", ID)
            tr.appendChild(td);
        }
    }
    document.getElementsByTagName("button")[0].style.display = "none";
}



let view = {
    displayMessage: function(msg) {
        let messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function(location) {
        let messageArea2 = document.getElementById(location);
        messageArea2.setAttribute("class", "hit");
    },
    displayMiss: function(location) {
        let messageArea3 = document.getElementById(location);
        messageArea3.setAttribute("class", "miss");
    }
};

view.displayMessage("FIRE!");
let model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,
    ships: [{
            locations: ["06", "16", "26"],
            hits: ["", "", ""]
        },
        {
            locations: ["24", "34", "44"],
            hits: ["", "", ""]
        },
        {
            locations: ["10", "11", "12"],
            hits: ["", "", ""]
        }
    ],
    fire: function(guess) {
        for (let i = 0; i < this.numShips; i++) {
            let ship = this.ships[i];
            let index = ship.locations.indexOf(guess); 
            if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT!");
                if (this.isSunk(ship)) {
                    view.displayMessage("You sank my battleship!");
                    this.shipsSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("You missed.");
        return false;
    },
    isSunk: function(ship) {
        for (var i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    }

};

let controller = {
    guesses: 0,
    processGuess: function(guess) {
        let location = parseGuess(guess);
         if (location) {
            this.guesses++;
            let hit = model.fire(location);
            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage("You sank all my battleships, in " + this.guesses + " guesses");
}
        }
    }
};

function parseGuess(guess) {
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

    if (guess === null || guess.length !== 2) {
        alert("Xndrum enq grel Mecatar ev nshel 0-6 tvery.");
    } else {
        firstChar = guess.charAt(0);
        let row = alphabet.indexOf(firstChar);
        let column = guess.charAt(1);

        if (isNaN(row) || isNaN(column)) {
            alert("Tvyal vandaky dashtic durs e!");
        } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
            alert("Tvyal vandaky dashtic durs e!");
        } else {
            return row + column;
        }
    }
    return null;
};

//onclick
function init() {
let fireButton = document.getElementById("fireButton");
fireButton.onclick = handleFireButton;
let guessInput = document.getElementById("guessInput");
guessInput.onkeypress = handleKeyPress;
}


function handleFireButton() {
let guessInput = document.getElementById("guessInput");
let guess = guessInput.value;
controller.processGuess(guess);
guessInput.value = "";
}

// enteri hamar
function handleKeyPress(e) {
let fireButton = document.getElementById("fireButton");
if (e.keyCode === 13) {// enter =13
fireButton.click();
return false;
}
}

window.onload = init;



