function showf(n,n1,step){
    const arr = [];
    let j = 0;
    for(i = n; i <= n1; i += step) {
        arr[j] = i;
        j++;
    }

	return arr;

}
console.log(showf(1, 20, 2));

function showArr(arr){
    let sum = 0;
    let len = arr.length;
    for(let i = 0; i < len; i++){
        sum += arr[i];
    }
  return sum;
}
console.log(showArr(showf(1, 20, 2)));

function netaharum(a){
    let count = 0;
    let item = 0;
    let len = a.length;
    while(item <= len - 1) {
        if(a[item] === '<' && a[item + 1] === '-') {
            item += 1;
            while(a[item] === '-') {
                item += 1;
            }
            if(a[item] === '<' && a[item + 1] === '<') {
                count++;
                item += 1;
            }
        }
        item++;
    }
    item = 0;
}
while(item <= len - 1) {
        if(a[item] === '>' && a[item + 1] === '>' && a[item + 2] === '-') {
            item += 2;
            while(a[item] === '-') {
                item += 1;
            }
            if(a[item] === '>') {
                count++;
            }
        }
        item++;
    }
    return count;
}
let str = ">>>>--<><>>>>>-->>---<-->>>";
console.log(netaharum(str));

