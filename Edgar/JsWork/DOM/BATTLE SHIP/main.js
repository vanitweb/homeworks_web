/*function init(){
	var planet = document.getElementById('P1');
	planet.textContent = "Это просто текст";
	planet.setAttribute("class", "mainp");

}
window.onload = init;*/
/*var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses  = 0;

var isSunk = false;

while(isSunk == false) {
    guess = prompt("Ready (enter a number 0-6):");
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid number");
    } else {
        guesses += 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            alert("HIT");
            hits = hits + 1;
            if (hits == 3) {
                isSunk = true;
                alert("Корабль потоплен!");
            }
        } else {
            alert("miss!");
        }
    }
}
let stats = "You took " + guesses + " guesses to sink the battleship, " +
    "which means your shooting accuracy was " + (3 / guesses);
alert(stats);*/



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

/*naveri kordinatnery start*/
var ships = [{ locations: ["10", "20", "30"], hits: ["", "", ""] },
{ locations: ["32", "33", "34"], hits: ["", "", ""] },
{ locations: ["63", "64", "65"], hits: ["", "", "hit"] }];
/*naveri kordinatnery end*/


view.displayMessage("Tap tap, is this thing on?");


