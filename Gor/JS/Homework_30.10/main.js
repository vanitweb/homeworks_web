//30.10.2018 տնային աշխատանք
//գտնել տեքստում յուրաքանչյուր տառի հանդիպումների քանակը
function charCount(text) {
    let newArray = text.split('');
    let aybuben = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ];
    for(let i = 0; i < aybuben.length; i++) {
        let count = 0;
        for(j = 0, len = newArray.length; j < len; j++) {
            if(newArray[j] === aybuben[i]) {
                count++;
            }
        }
        console.log(`${aybuben[i]} tar@ krknvum e ${count} angam`)
    }
}
charCount("qwertyuiopasdfghjklzxcvbnm a,b,c");
//վերադարձնել ֆունկցիայի անունը
function returnName() {
     return arguments.callee.name;
}
console.log(returnName());
//ֆւնկցիայի արգումենտին տալ ֆունկցիա
function print(value) {
    console.log(value);
}
function square(value) {
    console.log(value * value);
}
function prime(value) {
    let count = 1;
    for(let item = 2; item <= Math.sqrt(value); item++) {
        if(value % item === 0) {
            count++;
        }
    }
    if(count === 1) {
        console.log("True");
    } else {
        console.log("False");
    }
}
function newFunction() {
    let summ = 0;
    for(let i = 1; i < arguments.length; i++) {
        summ += arguments[i];
    }
    arguments[0](summ);
}
newFunction(print, 1, 2, 0);
newFunction(square, 1, 2, 0);
newFunction(prime, 1, 2, 0);