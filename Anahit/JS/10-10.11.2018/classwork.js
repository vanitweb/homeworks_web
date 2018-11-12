//Task classwork 

let range = (start, end) => [...Array(end - start).keys(), end - start].map(n => start + n);
let A = range(65, 90);   // A-Z
let a = range(97, 122);  // a-z
let dig = range(48, 57); // 0-9
let all = A.concat(a).concat(dig); // 3@ irar miacrac

function generate_id(length) {
    let str = '';
    for(let i = 0; i < length; i++){ 
        str += String.fromCharCode(all[Math.floor(Math.random() * all.length)]);
    }
    return str;
}

function generate_id_format(length){
    let str = '';
    for(let i = 0,k = 3,n = 5; i < length + length / 5 - 1; i++){
        if(i <= 2) {
            str += String.fromCharCode(A[Math.floor(Math.random() * A.length)]);
	} else if((i - k) % 6 === 0 || (i - k - 1) % 6 === 0) {
            str += String.fromCharCode(dig[Math.floor(Math.random() * dig.length)]);//3,4,9,10,15,16...indeqsnerum gtnvoxner@ tiv en
        } else if((i - n) % 6 === 0) {
            str += '-'; //5,11,17...indexnerum gtnvoxner@ '-' en
        } else {
            str += String.fromCharCode(a[Math.floor(Math.random() * a.length)]);
        }
    }
    return str;
}
console.log(generate_id(15));
console.log(generate_id_format(25));
console.log(generate_id_format(12));



