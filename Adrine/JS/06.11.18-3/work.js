//1. Return function name
function Fname() {
    return Fname.name;
}
console.log(Fname());

//2. Print numbers from 1 to 20 with 5 seconds interval
function printNumbers() {
    let current = 1;

    let timerId = setInterval(function() {

        alert(current);
        if (current == 20) {
            clearInterval(timerId);

        }

        current++;
    }, 5000);
}

printNumbers(1, 20);

