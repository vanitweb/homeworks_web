let persons = {
	person: [{
		name: 'Karen',
		surname: 'Manukyan',
		age: 32,
		username: 'manukyan',
		password: 2345678
	}, {
		name: 'Vasya',
		surname: 'Petrov',
		age: 40,
		username: 'petrov',
		password: 1234
	}, {
		name: 'Pety',
		surname: 'Andersson',
		age: 22,
		username: 'sson',
		password: 87654
	}],

	erkar: function() {
		return this.person.length;
	},

	addUser: function(name, surname, age, username, password) {
		let newperson = {};
		newperson['name'] = name;
		newperson['surname'] = surname;
		newperson['age'] = age;
		newperson['username'] = username;
		newperson['password'] = password;
		persons.person.push(newperson);
	},

	login: function(username, password) {
		for (let i = 0; i < erk; i++) {
			if (persons.person[i]['username'] === username && persons.person[i]['password'] === password) {
				console.log(`Hello ${persons.person[i].name}`);
				break;
			} else {
				console.log(' Aydpisi ogtater chka!');
			}
		}
	},

	deleteUser: function(username, password) {
		for (let i = 0; i < erk; i++) {
			if (persons.person[i]['username'] === username && persons.person[i]['password'] === password) {
				delete persons.person[i];
			}
		}
	},

	printUserInfo: function(name) {
		for (let i = 0; i < erk; i++) {
		if (persons.person[i]['name'] === name) {
			console.log(` ${persons.person[i]['name']}  ${persons.person[i]['surname']}  ${persons.person[i]['age']}`);
			break;
		}
		console.log(' Aydpisi ogtater chka!');
		}
	}
};
let erk = persons.erkar();
let login = persons.login;
let deleteUser = persons.deleteUser;
let printUserInfo = persons.printUserInfo;
let addUser = persons.addUser;
login('manukyan', 2345678);
deleteUser();
printUserInfo('Karen');
addUser();