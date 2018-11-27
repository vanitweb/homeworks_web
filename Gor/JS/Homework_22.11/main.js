//Homeworks 22.11.2018
//Homework 1.1: Փոխել ստանդարտ օբյեկտներից որևէ մեկի որևէ ստանդարտ մեթոդ
let arr = [1, 2, 3, 4];
Array.prototype.sort = function() {
	console.log("Ashxatum a im uzacy");
}
arr.sort();
//Homework 1.2: Ստանդարտ օբյեկտներից որևէ մեկի համար ստեղծել սեփական մեթոդ
Array.prototype.gumar = function() {
	let summ = 0;
	for(let item of this) {
		summ += item;
	}
	return summ;
}
console.log(`zangvatsi elementneri gumar@: ${arr.gumar()}`);
//Homework 2: Ստեղծել օբյեկտ, որի բոլոր արգումենտները փակ են, հասանելի չեն դրսից կանցհի համար, օբյեկտներին արժեք տալու և նրանցից արժեք ստանալու համար օգտագործել set և get ֆունկցիաները
function person() {
	let firstName, lastName, age;
	let obj = {
		set fName(x) {
			firstName = x;
		},
		set lName(x) {
			lastName = x;
		},
		set personAge(x) {
			age = x;
		},
		get fName() {
			return firstName;
		},
		get lName() {
			return lastName;
		},
		get personAge() {
			return age;
		}
	};
	return obj;
};
let newPerson = person();
newPerson.fName = "Gor";
newPerson.lName = "Manukyan";
newPerson.personAge =25;
console.log(newPerson.fName);
console.log(newPerson.lName);
console.log(newPerson.personAge);