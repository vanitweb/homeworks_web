//Task 1. make_flat([1, [2], [3, [[4]]],[5,6]]) => [1, 2, 3, 4, 5, 6]

let arr = [1, [2], [3, [[4]]],[5,6]];
function make_flat(arr) {
    let depth = 0;
    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
        depth ++;
        make_flat(arr[i]);
        }
    }
    return arr.flat(depth);;
}
console.log(make_flat(arr));

//Task 2. Հաշվել զանգվածի բոլոր դրական թվերի գումարը։

function positive_sum(arr) {
    function isPositive(num) {
        return num > 0;
    }
    let sum = 0;
    let arrReturn = arr.filter(isPositive);
    while(arrReturn.length > 0) {
        sum += arrReturn.pop();
    } 
    console.log(sum);    
}
positive_sum([5,-2,7,1,-3,1]);

//2rd exanak

var array = [-3, 5, 2,-1];
var sum = 0;
array.forEach(function(element) {
    if(element > 0) {
        sum += element;
    } 
});
console.log(sum); 

//Task 3. Տրված զանգվածից ստանալ նոր զանգված, որի յուրաքանչյուր էլեմենտը տրված զանգվածի էլեմենտի կրկնապատիկն է
//forEach i mej nuyn zangvaci vra chilinum poxel elementner@ ?

function twice(arr) {
    let arrReturn = [];
    arr.forEach(function(element) {
        arrReturn.push (element * 2);
    });
console.log(arrReturn);
}
twice([3, 5, 2,1]);
/*
//Task 4. Գրել ֆունկցիա, որը արգումենտում կստանա օբյեկտների (մարդկանց) զանգված և կսորտավորի ըստ տրված դաշտի (keyի)։ Մարդ օբյեկտը պետք է ունենա անուն, ազգանուն, տարիք և գրանցման օր դաշտերը։

let man = [ {
             name: 'Anna',
             lastName: 'Davtyan',
             age: 15,
             date: '15.03.2016'
            }, 
            {
             name: 'Aram',
             lastName: 'Karapetyan',
             age: 22,
             date: '5.08.2013'
            },
            {
             name: 'Ani',
             lastName: 'Qaramyan',
             age: 30,
             date: '30.01.2016'
            }
          ];
function sort_name(man1, man2) {
    return man1.name.toUpperCase() > man2.name.toUpperCase();
}
function sort_age(num1, num2) {
    return num1.age > num2.age;
}
function obj_sort(arr, 'key') {
    if(key === 'name') {
        return arr.sort(sort_name);
    } else if(key === 'age') {
        return arr.sort(sort_age);
    }
}
console.log(obj_sort(man, 'name'));
console.log(obj_sort(man, 'age'));
*/
//Task 5. Գրել ֆունկցիա, որը կգտնի երկու զանգվածների չկրկնվող էլեմենտները։

function non_recurring(arr1,arr2) {
    let arr3 = [];
    for(let i = 0; i < 2; i++) {
        arr1.forEach(function(element1) {
            let count = 0; 
            arr2.forEach(function(element2) {
                if(element1 === element2) {
                    count ++;
                }
            });  
        if(count === 0) {
            arr3.push(element1);
        }      
    });
    let temp = arr1;
    arr1 = arr2;
    arr2 = temp;
    }
    console.log(arr3);
}
non_recurring([2,4,5,7,6],[1,3,5,2]);
