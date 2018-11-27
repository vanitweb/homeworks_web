//Գրել 3 տիպ`  Person, Developer, JSDeveloper, ժառանգել հետևյալ կերպ Person <- Developer <- JSDeveloper:
//Երեք տիպում էլ ունենալ printInfo մեթոդ, որի մեջ կանչել ծնողի printInfo մեթոդը և տպել միայն այդ տիպին բնորոշ հատկությունները։

function Person() {
    this.name = 'name';
    this.age = 20;
    this.printInfo = function() {
        console.log("printInfo in Person");    
        for (var name in this) {
            if (this.hasOwnProperty(name)) {
                console.log(name);
            }
        }
    }
}

function Developer() {
    this.programingLanguages = 3;
    this.printInfo = function() {
        console.log("printInfo in Developer");
        for (var name in this) {
            if (this.hasOwnProperty(name)) {
                console.log(name);
            }
        }
        Person.call(this);
        this.printInfo();
    }
}  

function JSDeveloper() {
    this.esperience = 5;
    this.printInfo = function() {
        console.log("printInfo in JSDeveloper"); 
        for (var name in this) {
            if (this.hasOwnProperty(name)) {
                console.log(name);
            }
        }
        Developer.call(this);
        this.printInfo();
    }
}

Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

JSDeveloper.prototype = Object.create(Developer.prototype);
JSDeveloper.prototype.constructor = JSDeveloper;

let person = new Person();
let developer = new Developer();
let jsDeveloper = new JSDeveloper();

console.log(person.printInfo());
console.log("*******************");
console.log(developer.printInfo());
console.log("*******************");
console.log(jsDeveloper.printInfo());

