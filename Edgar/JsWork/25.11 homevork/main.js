// Array.sort methods
console.log("--------------------------------------");
let ad = [12, 58, 4, 6, 3];
Array.prototype.gumar = function () {
    var n = this.length;
    for (var i = 0; i < n-1; i++) {
        let min = i;
        for (var j = i + 1; j < n; j++) {
            if (this[j] < this[min]) {
                min = j;
            }
        }
        let t = this[min];
        this[min] = this[i];
        this[i] = t;
    }
    return this;
}
console.log(ad.gumar());
console.log("--------------------------------------");
// Set and Get
let user = {
  firstname: "",
  surname: "",
	age: '',
	set frsName(a) {
		if( a.length < 2 || typeof a !== 'string'){
			throw `typeOf Error '${a}', it most by 'String' and mor then '${a.length}' symbol`;
		}else{
		this.firstname = a;
		}
	},
	set SurName(a) {
		if(typeof a !== 'string'  || a.length < 2 ){
			throw `typeOf Error '${a}', it most by 'String' and mor then '${ a.length}' symbol`;
		}else{
		this.surname = a;
		}
	},
	set Age(value){
		this.age = value < 0 ? 0 : value > 101 ? 'very old' : value;
	},
	get Age() {
		return `age: ${this.age}`;
	},
	get frsName(){
		return `firstName: ${this.firstname}`;
	},
	get SurName(){
		return `surname: ${this.surname}`;
	}
};
user.frsName = 'Sebastian';
user.SurName = 'Koloridos';
user.Age = 105;
console.log(user.frsName);
console.log(user.frsName);
console.log(user.age);
console.log("--------------------------------------");

//create new method
Array.prototype.reverse = function() {
	console.log("ReCoding 'Array.reverse' method:");
}
ad.reverse();
console.log("--------------------------------------");



