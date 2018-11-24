//Task 1.1 Փոխել Array -ի մեթոդներից մեկը 
let myArray1 = ['a', 'b', 'c', 'd'];
Array.prototype.reverse = function() {
	return myArray1.length;
}
console.log(myArray1.reverse());



//Task 1.2 Ավելացնել մեր ստեղծած մեթոդը։
let myArray2 = [2, 3, 4, 5];
Array.prototype.myMethod = function(){
	let result = [];
	for (let i = 0; i < this.length; i++) {
		result.push(Math.pow(this[i], 3));
	}
	return result;
}
console.log(myArray2.myMethod());



//Task 2.Հայտարարել տիպ, որի բոլոր property-ները privat են;

let employee = {
    name: "",
    surname: "",
    get fullName() {
        return this.name + " " + this.surname;
    },
    set fullName(value) {
        let res = value.toString().split(" ");
        this.name = res[0] || "";
        this.surname = res[1] || "";
    },
};
employee.fullName = "Elen Sahakyan";
console.log(employee.name);
console.log(employee.surname);
console.log(employee.fullName);


