//format string RegExp

let range = (start, end) => [...Array(end - start).keys(), end - start].map(n => start + n);
let A = range(65, 90);   // A-Z
let a = range(97, 122);  // a-z
let dig = range(48, 57); // 0-9
let all = A.concat(a).concat(dig); // 3@ irar miacrac

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
let string = generate_id_format(15);
console.log(string.match(/[A-Z]{3}[0-9]{2}(-[a-z]{3}[0-9]{2})*/));





