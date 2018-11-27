//Task 1 Փոխել array-ի մեթոդներից մեկը 

Array.prototype.sort = function() {
    console.log("ashxatel e poxac prototype");
}
let months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();

//Task 2 Ավելացնել մեր ստեղծած մեթոդը։
//string֊ի մեջ բոլոր պռոբելները դարձնել *

String.prototype.newMetod = function(a) {
    let strReturn = '';
    for(let i = 0; i < this.length; i++) {
       if(this[i] === ' ') {
           strReturn += a;
       } else {
           strReturn += this[i];
       }
    }
    return strReturn;
}
let str = 'gg9 8hs r87 47#d +fd&';
console.log(str.newMetod('*'));

//Task 2.Հայտարարել տիպ, որի բոլոր property-ները privat են

function myTypePerson() {
    let name = ' ';
    let age = 0;
    this.get = function() {
        return "name is " + this.name + " age is " + this.age; 
    }
    this.set = function (name, age) {
        this.name = name;
        this.age = age;
    } 
    return "name is " + name + " age is " + age;
}
let person = new myTypePerson();
console.log(person.name);
console.log(person.age);
console.log(person.get());
console.log(person.set('Ani', 18));
console.log(person.get());

//funkciayi mijocov
let person1 = myTypePerson();
console.log(person1);

