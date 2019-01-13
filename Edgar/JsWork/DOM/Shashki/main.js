function addCheckerToCell(cell, color) {
    var checker = document.createElement('div');
    checker.className = " checker " + color;
    cell.appendChild(checker);
}

function DrawBoard() {
    var boardTable = document.createElement('table');
    boardTable.className += " board";
    var size = 8;

    for (var i = 0; i < size; i++)
    {
        var row = boardTable.insertRow(-1);
        for (var j = 0; j < size; j++)
        {
            var cell = row.insertCell(-1);
            cell.setAttribute("onclick", "coord(" + i + "," + j + ");"); 

            if (((i == 2 || i == 0) && j % 2 == 1) || 
                (i == 1 && j % 2 == 0))
            {
                addCheckerToCell(cell, 'black');
            }
            if (((i == 5 || i == 7) && j % 2 == 0) ||
                (i == 6 && j % 2 == 1))
            {
                addCheckerToCell(cell, 'white');
            }
        }
    }

    document.body.appendChild(boardTable);

}

window.addEventListener('load', DrawBoard);

// Logic of game

var Data = { // Хранилище данных игры
    PreviousColor: "black",
    PlayerColor: "",
    ClickCoord: "",
    Row: 0,
    Cell: 0,
    Bool: 1
}

function coord(row, cell) { // stanum e click-i kordinatnery

    Data.Row = row;
    Data.Cell = cell;

    RightCell(Data.Row, Data.Cell); // dashti guyni stugum,

    if (CheckPlayer()) { // xaxacoxi stugum

        Data.ClickCoord = "" + Data.Row + Data.Cell;

    } else {

        if (Data.PlayerColor == "black") {
            Algorithm_Black();
        } else {
            Algorithm_White();
        }

    }

}

function RightCell(row, cell) { // dashti jshtutyan stugum

    if (row % 2 == 0) {

        if (cell % 2 == 0) {
            Data.Cell = null;
            alert("Wrong!");
            return;
        }

    } else {

        if (cell % 2 == 1) {
            Data.Cell = null;
            alert("Wrong!");
            return;
        }

    }

}

function CheckPlayer() { //stugum e qayleri jisht hertakanutyuny

    if (Data.Cell != null) {

        var element = document.getElementById("" + Data.Row + Data.Cell);

        if (element.firstChild != undefined) {
            var color = element.firstChild.getAttribute("class");
        } else {
            return false;
        }

    }

    if (color == " checker black" && Data.PreviousColor == "black" ||
        color == " checker white" && Data.PreviousColor == "white") {

        alert("not your turn!");
        Data.Cell = null;
        return;

    } else {

        if (color == " checker black") {
            Data.PlayerColor = "black";
        } else {
            Data.PlayerColor = "white";
        }

        return true;

    }
    
}

function Algorithm_Black() {

    var FieldCoord = "" + Data.Row + Data.Cell;

    if (Data.ClickCoord == "" + (Data.Row - 1) + (Data.Cell + 1) ||
        Data.ClickCoord == "" + (Data.Row - 1) + (Data.Cell - 1)) {

        document.getElementById(Data.ClickCoord).innerHTML = "";
        var Field = document.getElementById(FieldCoord);
        addCheckerToCell(Field, Data.PlayerColor);
        Data.PreviousColor = "black";

    }

    Black_Fight(FieldCoord);

}

function Algorithm_White() {

    var FieldCoord = "" + Data.Row + "" + Data.Cell;

    if (Data.ClickCoord == "" + (Data.Row + 1) + (Data.Cell + 1) ||
        Data.ClickCoord == "" + (Data.Row + 1) + (Data.Cell - 1))
    {

        document.getElementById(Data.ClickCoord).innerHTML = "";
        var Field = document.getElementById(FieldCoord);
        addCheckerToCell(Field, Data.PlayerColor);
        Data.PreviousColor = "white";

    }

    White_Fight(FieldCoord);

}

function White_Fight(FieldCoord) {

    var num = +Data.ClickCoord - +FieldCoord;

    if (num == 18) {
        var Black_Check = document.getElementById("" + (Data.Row + 1) + "" + (Data.Cell - 1)).firstChild.getAttribute("class") == " checker black";
        if (Black_Check) {
            document.getElementById("" + (Data.Row + 1) + "" + (Data.Cell - 1)).innerHTML = "";
        }
    } else if (num == 22) {
        var Black_Check = document.getElementById("" + (Data.Row + 1) + "" + (Data.Cell + 1)).firstChild.getAttribute("class") == " checker black";
        if (Black_Check) {
            document.getElementById("" + (Data.Row + 1) + "" + (Data.Cell + 1)).innerHTML = "";
        }
    }
    if (num == 18 || num == 22) {
        document.getElementById(Data.ClickCoord).innerHTML = "";
        var Field = document.getElementById(FieldCoord);
        addCheckerToCell(Field, Data.PlayerColor);
        Data.PreviousColor = "white";
    }

}

function Black_Fight(FieldCoord) {

    var num = +FieldCoord - +Data.ClickCoord;

    if (num == 18) {
        var Black_Check = document.getElementById("" + (Data.Row - 1) + "" + (Data.Cell + 1)).firstChild.getAttribute("class") == " checker white";
        if (Black_Check) {
            document.getElementById("" + (Data.Row - 1) + "" + (Data.Cell + 1)).innerHTML = "";
        }
    } else if (num == 22) {
        var Black_Check = document.getElementById("" + (Data.Row - 1) + "" + (Data.Cell - 1)).firstChild.getAttribute("class") == " checker white";
        if (Black_Check) {
            document.getElementById("" + (Data.Row - 1) + "" + (Data.Cell - 1)).innerHTML = "";
        }
    }
    if (num == 18 || num == 22) {
        document.getElementById(Data.ClickCoord).innerHTML = "";
        var Field = document.getElementById(FieldCoord);
        addCheckerToCell(Field, Data.PlayerColor);
        Data.PreviousColor = "black";
    }

}