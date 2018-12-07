//Փոխել ստանդարտ օբյեկտներից որևէ մեկի որևէ ստանդարտ մեթոդ

function Car(types, model, year) {
  this.types = types;
  this.model = model;
  this.year = year;
  this.speed = 0;
}
let mycar1 = new Car("Nissan", "kicks", 2018);
let mycar2 = new Car("Audi", "A6,", 2008);
console.log(mycar1);

mycar1.model = 'Juke';
console.log(mycar1);

mycar1.color = 'white';
console.log(mycar1);


// Ստանդարտ օբյեկտներից որևէ մեկի համար ստեղծել սեփական մեթոդ
function Car(types, model, year, color) {
  this.types = types;
  this.model = model;
  this.year = year;
  this.color = color;
}
let theCar = new Car ('Nissan', 'kicks', 2018, 'white' );
Car.prototype.toString = function carToString() {
  var ret = 'car ' + this.types + ' - ' + this.model + ', ' + this.year + ' ' + this.color;
  return ret;
}
console.log(theCar.toString())



//  Ստեղծել օբյեկտ, որի բոլոր արգումենտները փակ են, հասանելի 
//չեն դրսից կանցհի համար, օգտագործել set և get ֆունկցիաները

let employee = {
    first: "",
    last: "",
    get fullName() {
        return this.first + " " + this.last;
    },
    set fullName(value) {
        let parts = value.toString().split(" ");
        this.first = parts[0] || "";
        this.last = parts[1] || "";
    },
}; 
employee.fullName = "Any Nazaryan";
console.log(employee.first);
console.log(employee.last);
console.log(employee.fullName);


//myus tarberak@
let user = {
  firstName: "Gayane",
  surname: "Gaboyan"
}
Object.defineProperty(user, "fullName", { 
	//добавления свойства к объекту через defineProperty() 
	// с дескриптором данных
  get: function() {
    return this.firstName + ' ' + this.surname;
  },
  set: function(value) {
      let split = value.split(' ');
      this.firstName = split[0];
      this.surname = split[1];
    }
});
user.fullName = "Katya Vasilyan";
console.log(user.fullName);