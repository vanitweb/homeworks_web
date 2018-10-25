
let i, j, parz;    
for (i = 3; i < 100; i++) {
parz = true;
    for (j = 2; j < i; j++){
        if (i % j === 0) {
        parz = false;
    }
}
    if (parz) {
        console.log(` ${i} թիվը պարզ է:`);

    }
}

     }
}
/*ամենաշատ հանդիպող էլեմենտը(ները) նշված մասիվում*/
const arr = [4, 87, 58, 59, 65, 5, 5, 2, 1, 5, 5, 3, 6, 9, 8, 9, 9, 9, 9, 9, 41, ];
let count, count1, sum, i, j;
let max = 0;
for (i in arr) {
    sum = 0;
    for (j of arr) {
        if (arr[i] === j) {
            sum++;
        }
        if (sum > max) {
            max = sum;
            count = i;
        }
        if (sum === max) {
            count1 = i;

        }
    }

}
console.log(`[${arr}] մասիվում`);
if (arr[count] !== arr[count1]) {
    console.log(`${arr[count]} եվ ${arr[count1]} թվերը հանդիպում են ${max} անգամ։`);
} else {
    console.log(`${arr[count]} թիվը հանդիպում է ${max} անգամ։`);
}
 

   
>>>>>>> 3e7a5f0cf03d4b9745486b70eef972808de51c6d
