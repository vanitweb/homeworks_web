//homework1
let arr = [
    [" "," "," "],
    [" "," "," "],
    [" "," "," "]
];
function xaxacox1(){
    let kanch = 0;
    return function(x, y){
        console.log(arr);
        if(arr[x][y] === " "){
            arr[x][y] = "X";
            kanch++;
            if(kanch >= 3 && kanch < 5){
                return stugumX();
            }
            if(kanch === 5){
                return "nichya"
            }
            if(kanch > 5){
                return "xaxe prcela"
            }
        }else{
            return "estex drvaca"
        }
    }
}
function xaxacox2(){
    kanch = 0;
    return function(x, y){
        console.log(arr);
        if(arr[x][y] === " "){
            arr[x][y] = "O";
            kanch++;
            if(kanch >= 3 && kanch < 5){
                return stugumX();
            }
            if(kanch === 5){
                return "nichya"
            }
            if(kanch > 5){
                return "xaxe prcela"
            }
        }else{
            return "estex drvaca"
        }
    }
}
function stugumX(){
    for(let i in arr){
        if(arr[i][0] === "X" && arr[i][1] === "X" && arr[i][2] === "X" || arr[0][i] === "X" && arr[1][i] === "X" && arr[2][i] === "X"){
            return "xaxacox1 haxtec";
        }
    }
    if(arr[0][0] === "X" && arr[1][1] === "X" && arr[2][2] === "X" || arr[2][2] === "X" && arr[1][1] === "X" && arr[0][0] === "X"){
        return "xaxacox1 haxtec";
    }
}
function stugumO(){
    for(let i in arr){
        if(arr[i][0] === "O" && arr[i][1] === "O" && arr[i][2] === "O" || arr[0][i] === "O" && arr[1][i] === "O" && arr[2][i] === "O"){
            return "xaxacox2 haxtec";
        }
    }
    if(arr[0][0] === "O" && arr[1][1] === "O" && arr[2][2] === "O" || arr[2][2] === "O" && arr[1][1] === "O" && arr[0][0] === "O"){
        return "xaxacox2 haxtec";
    }
}
let X = xaxacox1();
let O = xaxacox2();
////homework 2
let arr = [];
for(let i = 0; i < 10; i++){
    arr[i] = [];
}
for(let i in arr){
    for(let j in arr){
        arr[i][j] = " ";   
    }
}
//1 - 4
arr[0][0] = "*";
arr[2][8] = "*";
arr[7][9] = "*";
arr[5][4] = "*";
//2 - 3
arr[0][3] = "*";
arr[1][3] = "*";
arr[8][0] = "*";
arr[9][0] = "*";
arr[4][1] = "*";
arr[4][2] = "*";
////3 -2
arr[7][3] = "*";
arr[8][3] = "*";
arr[9][3] = "*";
arr[3][4] = "*";
arr[3][5] = "*";
arr[3][6] = "*";
////4 - 1
arr[6][7] = "*";
arr[7][7] = "*";
arr[8][7] = "*";
arr[9][7] = "*";
let nav1 = [
    [0, 0],
    [2, 8],
    [7, 9],
    [5, 4],
]
let nav2 = [
    [[0, 3], [1, 3]],
    [[8, 0], [9, 0]],
    [[4, 1], [4, 2]],
]
let nav3 = [
    [[7, 3], [8, 3], [9, 3]],
    [[3, 4], [3, 5], [3, 6]],
]
let nav4 = [
    [6, 7],
    [7, 7],
    [8, 7],
    [9, 7],
]
function stugum(){
    for(let i in nav1){
        if(arr[nav1[i][0]][nav1[i][1]] === "V"){
            arr[nav1[i][0]][nav1[i][1]] = "X"
        }
    }
    if(arr[nav1[0][0]][nav1[0][1]] === "X" && arr[nav1[1][0]][nav1[1][1]] === "X" && arr[nav1[2][0]][nav1[2][1]] === "X" && arr[nav1[3][0]][nav1[3][1]] === "X"){
        nav1 = true;
    }
    for(let i in nav2){
        if(arr[nav2[i][0][0]][nav2[i][0][1]] === "V" && arr[nav2[i][1][0]][nav2[i][1][1]] === "V"){
            arr[nav2[i][0][0]][nav2[i][0][1]] = "X";
            arr[nav2[i][1][0]][nav2[i][1][1]] = "X";
        }
        if(arr[nav2[i][0][0]][nav2[i][0][1]] === "X" && arr[nav2[i][1][0]][nav2[i][1][1]] === "X"){
            nav2[i] = true;
        }
    }
    if(nav2[0] === true && nav2[1] === true && nav2[2] === true){
        nav2 = true;
    }
    for(let i in nav3){
        if(arr[nav3[i][0][0]][nav3[i][0][1]] === "V" && arr[nav3[i][1][0]][nav3[i][1][1]] === "V" && arr[nav3[i][2][0]][nav3[i][2][1]] === "V"){
            arr[nav3[i][0][0]][nav3[i][0][1]] = "X";
            arr[nav3[i][1][0]][nav3[i][1][1]] = "X";
            arr[nav3[i][2][0]][nav3[i][2][1]] = "X";
        }
        if(arr[nav3[i][0][0]][nav3[i][0][1]] === "X" && arr[nav3[i][1][0]][nav3[i][1][1]] === "X" && arr[nav3[i][2][0]][nav3[i][2][1]] === "X"){
            nav3[i] = true;
        }
    }
    if(nav3[0] === true && nav3[1] === true){
        nav3 = true
    }
    if(arr[nav4[0][0]][nav4[0][1]] === "V" && arr[nav4[1][0]][nav4[1][1]] === "V" && arr[nav4[2][0]][nav4[2][1]] === "V" && arr[nav4[3][0]][nav4[3][1]] === "V"){
        arr[nav4[0][0]][nav4[0][1]] = "X";
        arr[nav4[1][0]][nav4[1][1]] = "X";
        arr[nav4[2][0]][nav4[2][1]] = "X";
        arr[nav4[3][0]][nav4[3][1]] = "X";
    }
    if(arr[nav4[0][0]][nav4[0][1]] === "X" && arr[nav4[1][0]][nav4[1][1]] === "X" && arr[nav4[2][0]][nav4[2][1]] === "X" && arr[nav4[3][0]][nav4[3][1]] === "X"){
        nav4 = true;
    }
    if(nav1 === true && nav2 === true && nav3 === true && nav4 === true){
        return "haxtanak";
    }
}
function xaxacox(x, y){
    if(arr[x][y] === "*"){
        arr[x][y] = "V";
    }
    if(arr[x][y] === " "){
        arr[x][y] = "#"
    }
    return arr;
}
//for(let i = 0; i < 10; i++){
//    for(let j = 0; j < 10; j++){
//        xaxacox(i,j)
//    }
//}

//xaxacox(0,0)
//xaxacox(0,1)
//xaxacox(0,2)
//xaxacox(0,3)
//xaxacox(0,4)
//xaxacox(0,5)
//xaxacox(0,6)
//xaxacox(0,7)
//xaxacox(0,8)
//xaxacox(0,9)
//xaxacox(1,0)
//xaxacox(1,1)
//xaxacox(1,2)
//xaxacox(1,3)
//xaxacox(1,4)
//xaxacox(1,5)
//xaxacox(1,6)
//xaxacox(1,7)
//xaxacox(1,8)
//xaxacox(1,9)
//xaxacox(2,0)
//xaxacox(2,1)
//xaxacox(2,2)
//xaxacox(2,3)
//xaxacox(2,4)
//xaxacox(2,5)
//xaxacox(2,6)
//xaxacox(2,7)
////xaxacox(2,8)
//xaxacox(2,9)
//xaxacox(3,0)
//xaxacox(3,1)
//xaxacox(3,2)
//xaxacox(3,3)
////xaxacox(3,4)
////xaxacox(3,5)
////xaxacox(3,6)
//xaxacox(3,7)
//xaxacox(3,8)
//xaxacox(3,9)
//xaxacox(4,0)
////xaxacox(4,1)
////xaxacox(4,2)
//xaxacox(4,3)
//xaxacox(4,4)
//xaxacox(4,5)
//xaxacox(4,6)
//xaxacox(4,7)
//xaxacox(4,8)
//xaxacox(4,9)
//xaxacox(5,0)
//xaxacox(5,1)
//xaxacox(5,2)
//xaxacox(5,3)
////xaxacox(5,4)
//xaxacox(5,5)
//xaxacox(5,6)
//xaxacox(5,7)
//xaxacox(5,8)
//xaxacox(5,9)
//xaxacox(6,0)
//xaxacox(6,1)
//xaxacox(6,2)
//xaxacox(6,3)
//xaxacox(6,4)
//xaxacox(6,5)
//xaxacox(6,6)
////xaxacox(6,7)
//xaxacox(6,8)
//xaxacox(6,9)
//xaxacox(7,0)
//xaxacox(7,1)
//xaxacox(7,2)
////xaxacox(7,3)
//xaxacox(7,4)
//xaxacox(7,5)
//xaxacox(7,6)
////xaxacox(7,7)
//xaxacox(7,8)
////xaxacox(7,9)
////xaxacox(8,0)
//xaxacox(8,1)
//xaxacox(8,2)
////xaxacox(8,3)
//xaxacox(8,4)
//xaxacox(8,5)
//xaxacox(8,6)
////xaxacox(8,7)
//xaxacox(8,8)
//xaxacox(8,9)
////xaxacox(9,0)
//xaxacox(9,1)
//xaxacox(9,2)
////xaxacox(9,3)
//xaxacox(9,4)
//xaxacox(9,5)
//xaxacox(9,6)
////xaxacox(9,7)
//xaxacox(9,8)
//xaxacox(9,9)