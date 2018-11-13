/*Task. Գրել օբյեկտ, որը պարունակում է օգտատերերի զանգված, յուրաքանչյուր օգտատեր ունի անուն, ազգանուն, տարիք, օգտանուն եւ գաղտնաբառ։ Օբյեկտին ավելացնել հետեւյալ մեթոդները՝ ●addUser(name, surname, age, username, password) - օգտատերերի զանգվածին կավելացնի նշված տվյալներով նոր օգտատեր։
●login(username, password) ֊Կստուգի նշված տվյալներով օգտատիրոջ առկայությունը եւ գտնելու դեպքում կողջունի օգտատիրոջը, հակառակ դեպքում կտեղեկացնի, որ օգտատերը չի գտնվել։
●deleteUser(username, password) - Համապատասխան տվյալներով օգտատեր գտնելու դեպքում կջնջի օգտատերերի զանգվածից։
●printUserInfo(name) - Կտպի համապատասխան օգտատիրոջ կամ օգտատերերի անունը, ազգանունը եւ տարիքը։*/

const users = {
	userNames: [
		user1 = {
			name: 'Petros',
			surname: 'Petrosyan',
			age: 23,
			username: 'Petros111',
			password: 'p123234',
		},
		user2 = {
			name: 'Poghos',
			surname: 'Poghosyan',
			age: 56,
			username: 'Poghos111',
			password: 'p567567'
		},
		user3 = {
			name: 'Vardan',
			surname: 'Vardanyan',
			age: 35,
			username: 'Vardan111',
			password: 'v345678'
		}
	],
	addUser: function (name, surname, age, username, password){
		let n = this.userNames.length;
		this.userNames.push(n);
		this.userNames[n] = {};
		this.userNames[n].name = name;
		this.userNames[n].surname = surname;
		this.userNames[n].age = age;
		this.userNames[n].username = username;
		this.userNames[n].password = password;
		console.log(this.userNames);
	},
	login: function (username, password){
		for (let i = 0; i < this.userNames.length; i++){
			if (this.userNames[i] && this.userNames[i].username === username && this.userNames[i].password === password){
				console.log('Hello!, ' + this.userNames[i].name);
			break;	
			}
			else {
				console.log('Unknown Username');
			}
		}
	},
	deleteUser: function (username, password){
		for (let i = 0; i < this.userNames.length; i++){
			if (this.userNames[i] && this.userNames[i].username === username && this.userNames[i].password === password){
				delete this.userNames[i];
				console.log(users);
			}
		}
	},
	printUserInfo: function(name){
		for (let i = 0; i < this.userNames.length; i++){
			if (this.userNames[i] && this.userNames[i].name === name){
				console.log( this.userNames[i].name + ' ' + this.userNames[i].surname +'--' + this.userNames[i].age);
			}
		}
	}
}
users.addUser('Sargis', 'Sargsyan', 33, 'Sargis111','s897867');
users.login ('Petros111', 'p123234');
users.printUserInfo ('Poghos');
users.deleteUser ('Vardan111', 'v345678');