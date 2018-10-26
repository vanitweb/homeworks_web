//Գլխավոր անկյունագծերը revers
let matrix1 = [];
let n1 = 6;
for(let i = 0; i < n1; i++){
    matrix1[i] = [1,2,3,4,5,6];
}
for(let i = 0; i < n1; i++){
    let temp = matrix1[i][i];
    matrix1[i][i] = matrix1[i][n1 - 1 - i];
    matrix1[i][n1 - 1 - i] = temp;
    }
console.log(matrix1);
                                                                                               
