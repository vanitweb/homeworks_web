// 0. (Դասարանային) Գրել ֆունկցիա, որը կհարթեցնի տրված զանգվածը։ Օրինակ
let mass = [1, [2],[3, [[4]]],[5, 6]];

function make_flat(arg) {
    return arg.reduce((acc, val) => Array.isArray(val) ? acc.concat(make_flat(val)) : acc.concat(val), []);
}
console.log("make_flat()", make_flat(mass));
console.log("--------------------------------------");

//1.Հաշվել զանգվածի բոլոր դրական թվերի գումարը։
let r = [1, 2, 3, 5, 1, 0, -6];

function m(ar) {
    let summa = 0;
    for (var i = 0; i < ar.length; i++) {
        if (ar[i] > 0) {
            summa += ar[i];
        }
    }
    console.log("summa", summa);
}
m(mass);

//Առանձնացնել մասիվի դրական տվերը
let positiv = r.filter(function(v) {
    return v > 0;
});
// նոր մասսիվը փոխանցել reduce Ֆունկցիային, վերադարձնելով դրական թվերի գումարը 
let g = positiv.reduce(function(sum, val) {
    return sum + val;
});
console.log("g", g);
console.log("--------------------------------------");
// 2. Տրված զանգվածից ստանալ նոր զանգված, որի յուրաքանչյուր էլեմենտը տրված զանգվածի էլեմենտի կրկնապատիկն է։
let array1 = [1, 4, 65, 2.3, 3, 12, 36, 5];

function newArrSqrt(data) {
    let sqrt = data.map(x => x * 2);
    return sqrt;
}
console.log("newArrSqrt", newArrSqrt(array1));

console.log("--------------------------------------");

/*3. Գրել ֆունկցիա, որը արգումենտում կստանա օբյեկտների (մարդկանց) զանգված և կսորտավորի
 ըստ տրված դաշտի (keyի)։Մարդ օբյեկտը պետք է ունենա անուն, ազգանուն, տարիք և գրանցման օր դաշտերը։
obj_sort(arr, ‘name’), obj_sort(arr, ‘age’) Kisat*/
let massObj = [{
        name: "Garik",
        surname: "Petrosyan",
        age: 28,
        register: "2014.05.15"
    },
    {
        name: "David",
        surname: "Hambaryan",
        age: 39,
        register: "2015.08.05"
    },
    {
        name: "Stepan",
        surname: "Sargsyan",
        age: 22,
        register: "2018.01.19"
    },
    {
        name: "Carlos",
        surname: "Zafón",
        age: 60,
        register: "2016.04.21"
    },
    {
        name: "laura",
        surname: "Papayan",
        age: 59,
        register: "2016.04.26"
    },
    {
        name: "Aram",
        surname: "Asatryan",
        age: 69,
        register: "2017.02.15"
    }
];

function Main(arr, format) {
    switch (format) {
        case "surname":
            return arr.sort(function(x, y) {
                if (x.surname < y.surname) {
                    return -1;
                }
                if (x.surname > y.surname) {
                    return 1;
                }
                return 0;
            });
            break;
        case "name":
            return arr.sort(function(x, y) {
                if (x.name < y.name) {
                    return -1;
                }
                if (x.name > y.name) {
                    return 1;
                }
                return 0;
            });
            break;
        case "age":
            return arr.sort(function(a, b) {
                return a.age - b.age;
            });
            break;
        case "register":
            return arr.sort(function(x, y) {
                if (x.register < y.register) {
                    return -1;
                }
                if (x.register > y.register) {
                    return 1;
                }
                return 0;
            });
            break;
    }
}
console.log("by name", Main(massObj, "name"));

console.log("--------------------------------------");
// kam
function Main2(arr, format) {
    arr.sort(function(a, b) {
        if(a[format] > b[format]) {
            return 1;
        }
        if(a[format] < b[format]) {
            return -1;
        }
        return 0;
    });
    return arr;
}
console.log("by name", Main2(massObj, "age"));
console.log("--------------------------------------");
//4. Գրել ֆունկցիա, որը կգտնի երկու զանգվածների չկրկնվող էլեմենտները։
let zangvac_1 = ["data6", "data1", "data2", "data3", "data4", "data5"];
let zangvac_2 = ["Alpha1", "data2", "data3", "data7", "data6"];

function returnObj(ob1, ob2) {
    let z = ob1.filter(function(val) {
        return ob2.indexOf(val) === -1;
    });
    let z2 = ob2.filter(function(val2) {
        return ob1.indexOf(val2) === -1;
    });
    return `in zangvac_1: ${z}, \nin zangvac_2: ${z2}`;
}

console.log(returnObj(zangvac_1, zangvac_2));