// փոփոխություն անկյունագծով  
const massiv = [];
let len, k;
let j = 0;
for (let i = 0; i < 10; i++) {
    massiv[i] = [];
    for (j = 9; j >= i; j--) {
        massiv[i][j] = 1;
        for (k = 0; k <= i; k++) {
            massiv[i][k] = 0;
        }
    }
}

console.log(massiv);
  
