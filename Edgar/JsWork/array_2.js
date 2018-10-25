// փոփոխություն անկյունագծով  
const massiv3 = [];
let j;
let len1 = 10;
for(let i = 0; i <len1; i++) {
	massiv3[i] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}
for(i = 0; i < len1; i++) {
    massiv3[i][i] = 1;
    for(j = len1-1; j >i; j--) {
    massiv3[i][j] = 1;
    
}
}
console.log(massiv3);

// փոփոխություն անկյունագծով տարբերակ 2
const mass = [];
let k;
j = 0;
for (let i = 0; i < 10; i++) {
    mass[i] = [];
    for (j = 9; j >= i; j--) {
        mass[i][j] = 1;
        for (k = 0; k <= i; k++) {
            mass[i][k] = 0;
        }
    }
}

console.log(mass);


// Շախմատ
const massiv2 = [];
let box = 8;
let c = false;
for (let i = 0; i < 10; i++) {
    massiv2[i] = [];
}
for (i = 0; i < box; i++) {
    for (j = 0; j < box; j++) {
        if (c) {
            massiv2[i][j] = '*';
        } else {
            massiv2[i][j] = '#';
        }
        c = !c;
    }
    c = !c;
}

console.log(massiv2);

// Շախմատ 0,1,2
const arr = [];
let len = 9;
for(let i = 0; i <len; i++) {
	arr[i] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}
for(i = 0; i < len; i++) {
    for(j = len-1; j > i; j--) {
    arr[i][i] = 1;
} 
    arr[i][len-j-1] = 1;
}
for(i = 0; i < len; i++) {
    for(j = 0; j < len; j++) {
        if( arr[i][j] !== 1){
        arr[i][j] = 2; 
        } 
    }
}

console.log(arr);