//Task 1.1 Փոխել Array -ի մեթոդներից մեկը 
let myArray1 = ['a', 'b', 'c', 'd'];
Array.prototype.reverse = function() {
	return myArray1.length;
}
console.log(myArray1.reverse());



//Task 1.2 Ավելացնել մեր ստեղծած մեթոդը։
let myArray2 = [1, 3, 4, 5];
Array.prototype.myMethod = function(){
	let result = [];
	for (let i = 0; i < this.length; i++) {
		if(typeof i === "number"){
			result.push(Math.pow(this[i], 3));
		}
	}
	return result;
}
console.log(myArray2.myMethod());



//Task 2.Հայտարարել տիպ, որի բոլոր property-ները privat են;
//Option1...
function Car(model, year){
    this.model = model;
    this.year = year;
}
Car.prototype = {
    constructor: Car,
    get prop(){
        return this.model + '-' + this.year;
    },
    set prop1(model){
        this.model = model;
    },
    set prop2(year){
        this.year = year;
    }	
}
let myObject = new Car("Mersedes", 2010);
console.log(myObject.prop);
myObject.prop1 = "BMW";
myObject.prop2 = 2015;
console.log(myObject.prop);



//Option2...
let func = function() {
  let type = 'animal';
  let sort = 'tiger';
  let year = 25;

  return {
    get: function() { return type + '-' +sort + '-' + year ; },
    set: function(value) { sort = value;}
  }
};

let A = func();

A.set('fish', 'ishkhan', 3);
console.log(A.get());



