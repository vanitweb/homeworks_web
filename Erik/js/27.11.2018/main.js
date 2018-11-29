function Person(name, surname, age){
  this.name = name;
  this.surname = surname;
  this.age = age;
}
Person.prototype.printInfo = function (){
  console.log(`${this.name}  ${this.surname}  ${this.age}`);
}
let x = new Person("Erik", "Papyan", 20);
x.printInfo();
function Developer(name, surname, age, branch) {
  Person.call(this, name, surname, age);
  this.branch = branch;
}
Developer.prototype.printInfo = function () {
  console.log(`${this.name}  ${this.surname}  ${this.age} ${this.branch}`);
}
let y = new Developer("Erik", "Papyan", 20, "JavaScript");
y.printInfo();
function JSDeveloper(name, surname, age, branch, level) {
  Developer.call(this, name, surname, age, branch);
  this.level = level;
}
JSDeveloper.prototype.printInfo = function () {
  console.log(`${this.name}  ${this.surname}  ${this.age} ${this.branch} ${this.level}`);
}
let z = new JSDeveloper("Erik", "Papyan", 20, "JavaScript", "junior");
z.printInfo();
