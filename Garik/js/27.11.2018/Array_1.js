//Գրել 3 տիպ`  Person, Developer, JSDeveloper, ժառանգել հետևյալ կերպ Person <- Developer <- JSDeveloper:
//Երեք տիպում էլ ունենալ printInfo մեթոդ, որի մեջ կանչել ծնողի printInfo մեթոդը և տպել միայն այդ տիպին բնորոշ հատկությունները։
function Person(anun, azganun) {
    this.anun = anun;
    this.azganun = azganun;
    this.printinfo = function(){
        for(let i in this){
            console.log(i)
        }
    }
}
let person1 = new Person("Garik", "Iskandaryan");
function Developer(lezu) {
    this.lezu = lezu;
    this.printinfo = function(){
        for(let i in this){
            if(this.hasOwnProperty
              (i)){
                console.log(i)
            }
        }
    }
}
let developer1 = new Developer("js");
developer1.__proto__ = person1;
function JSDeveloper(framework) {
    this.framework = framework;
    this.printinfo = function(){
        for(let i in this){
            if(this.hasOwnProperty
              (i)){
                console.log(i)
            }
        }
    }
}
let jsdeveloper1 = new JSDeveloper("Angular");
jsdeveloper1.__proto__ = developer1;
person1.printinfo();
console.log(person1);
developer1.printinfo();
console.log(developer1);
jsdeveloper1.printinfo();
console.log(jsdeveloper1)
//2
function Person(name,surname,age) {
	this.name = name;
	this.surname = surname;
	this.age = age;
};
function Developer(name,surname,age,work) {
	Person.call(this,name,surname,age);
	this.work = work;
}
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;
function JSDeveloper(name,surname,age,work,ECMAVersion) {
	Developer.call(this,name,surname,age,work);
	this.ECMAVersion = ECMAVersion;
}
JSDeveloper.prototype = Object.create(Developer.prototype);
JSDeveloper.prototype.constructor = JSDeveloper;
