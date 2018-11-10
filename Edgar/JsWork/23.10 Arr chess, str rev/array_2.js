const arr = [];
let len,k;
for (let i = 0; i<10; i++){
 arr[i] = [];
}

for (let j = 0, k = arr.length,  len = arr.length; j<len; j++){
arr[j][k] = 1;
console.log(arr);
k--;
}
/*console.log(k);*/

// փոփոխություն անկյունագծով  
const massiv3 = [];
let j;
let len2 = 10;
for(let i = 0; i <len2; i++) {
	massiv3[i] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}
for(i = 0; i < len1; i++) {
    massiv3[i][i] = 1;
    for(j = len2-1; j >i; j--) {
    massiv3[i][j] = 1;
    
}
}
console.log(massiv3);

// փոփոխություն անկյունագծով տարբերակ 2
const mass = [];
let k1;
j = 0;
for (let i = 0; i < 10; i++) {
    mass[i] = [];
    for (j = 9; j >= i; j--) {
        mass[i][j] = 1;
        for (k1 = 0; k1 <= i; k++) {
            mass[i][k1] = 0;
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
const arrr = [];
let len1 = 9;
for(let i = 0; i <len1; i++) {
	arrr[i] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}
for(i = 0; i < len1; i++) {
    for(j = len1-1; j > i; j--) {
    arrr[i][i] = 1;
} 
    arrr[i][len1-j-1] = 1;
}
for(i = 0; i < len1; i++) {
    for(j = 0; j < len1; j++) {
        if( arrr[i][j] !== 1){
        arrr[i][j] = 2; 
        } 
    }
}

console.log(arrr);

