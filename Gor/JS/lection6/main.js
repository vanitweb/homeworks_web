//xndir: funkciayin poxancel tiv ev amen kanchi jamanak naxordi hamemat argument@ avelacnel 1-ov
function newFunction(argument) {    
    return function returnFunc() {
        argument++;
        console.log(argument);
    }
}
let f2 = newFunction(4);
f2(); // 5
f2(); // 6
f2(); // 7
//moo - foo functions
(function() {
    let bar = 4;
    function foo(x) {
        let baz = 3;
        return function (y) {
            console.log(x + y + (++bar) + (++baz));
        }
    }
    let moo = foo(2);
    moo(1);
    moo(1);
})();
//funkcian 5 angam kancheluc heto kanchel ayl funkcia
function callater(func, count) {
    let a = 0;
    return function callManager() {
        a++;
        console.log("Hey everyone");
        if(a === count) {
            func();
        }
    }    
        
}
function print() {
    console.log("Hellow World");
}
let f = callater(print, 5);
f(); f(); f(); f(); f();

//mystery functions
let hidden = mystery(3);
let jumble = mystery3(hidden);
let result = jumble(2);
function mystery(input) {
    let secret = 4;
    input += 2;
    function mystery2(multiplier) {
        multiplier *= input;
        return secret * multiplier;
    }
    return mystery2;
}
function mystery3(param) {
    function mystery4(bonus) {
        return param(6) + bonus;
    }
    return mystery4;
}
console.log(result);