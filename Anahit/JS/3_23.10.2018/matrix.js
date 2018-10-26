//Գլխավոր անկյունագծից ներքև գտնվող էլեմենտները փոխարինել 0-ով
let matrix = [];
let n = 10;
for(let i = 0; i < n; i++){
    matrix[i] = [1,2,3,4,5,6,7,8,9,10];
}
for(let i = 0; i < n; i++){
    for(let j = n - 1 - i; j < n; j++){
        matrix[i][j] = 0;
    }
}
console.log(matrix);
