console.log("----------------------------------");
console.log("Return \'true\' or \'false\' books");
console.log("----------------------------------");

let a = []; 
let b = { author: "O'Reili",
        title: "JavaScript: The definitive guide",
        read: true
    };
let c = { author: "David Herman​",
        title: "Effective JavaScript",
        read: false
    };
let d = { author: "Stephen Edwin King",
        title: "11/22/63",
        read: true
    };
let e = { author: "Carlos Ruiz Zafón",
        title: "Marina",
        read: false
    };

a.push(b);
a.push(c);
a.push(d);
a.push(e);

function bul(value){
    for (var i = 0; i < a.length; i++) {
        if(value === true && a[i].read === true){
            console.log(`Author: ${a[i].author}\nTitle: ${a[i].title}`);
     }else if(value === false && a[i].read === false )
       console.log(`Author: ${a[i].author}\nTitle: ${a[i].title}`);
    }
}
bul(true);

console.log("----------------------------------");
console.log("The function returns the difference between 2 objects");
console.log("----------------------------------");

// ֆունկցիա, որը ստանում է 2 Օբյեկտ և վերադարձնում  նրանց տարբերությունը 3-րդ Օբյեկտում։
function returnObj(ob1, ob2) {
    const ob3 = {};
    for (var prop in ob1) {
        for (var prop2 in ob2) {
            if (!(prop in ob2)) {
                ob3[prop] = ob1[prop];
            }else if(prop === prop2 && (ob1[prop] !== ob2[prop2])){
                ob3[prop] = ob1[prop];
            }
            if (!(prop2 in ob1)) {
                ob3[prop2] = ob2[prop2];
            }
        }
    }
    return ob3;
}
obj1 = { a: 150, b: 151, c: 15, d: 54};
obj2 = { a: 150, b: 151, c: 153, e: 54, f: 6};

console.log("obj1", obj1);
console.log("obj2", obj2);
console.log("ob3", returnObj(obj1, obj2));

console.log("----------------------------------");
console.log("Swap \'key\' - \'value\'");
console.log("----------------------------------");
//ֆունկցիա, որը ստանում է Օբյեկտ և շրջում է նրա -(key-value = value- key):
o1 = {'a': "Alpha",'b': "Betta",'g': "Gamma", 'd': "Delta", "c": '25'};
function rever(o) {
    const swap = {};
    for (var val in o) {
      swap[o[val]] = val;
    }
    console.log('after', swap);
}
console.log('before', o1);
rever(o1);
