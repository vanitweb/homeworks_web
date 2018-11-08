// ֆունկցիա, որը 10 վարկյան անց հաշվում և արտածում է թվի ֆակտորիալը, ստուգելով այն 2 վարկյանը մեկ
console.log("---------------------------");
console.log("Home work 2");
let c;
function factorial() {
    let num = 5;
    let f = 1;
    if (num === 0 || num === 1) {
        console.log(1);
    }
    for (i = 2; i <= num; i++) {
        f *= i;
    }
    console.log(f);
}
function check() {
    c = factorial();
}
setTimeout(check, 10000);
let counter = 0;
let setI = setInterval(function checkUnd() {
    counter += 1;
    if (counter === 5) {
        clearInterval(setI);
        console.log("The end of")
    }
    if (c !== undefined) {
        console.log(c);
        
    } else {
        console.log("Processing...");
    }
}, 2000);