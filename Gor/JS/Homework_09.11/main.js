//ogtatereri zangvac parunakox object
let user = {
	name: ["Gor", "Edgar"],
	surname: ["Manukyan", "Nikoghosyan"],
	age: [25, 32],
	username: ["gor1993", "edgar1986"],
	password: ["gor1993", "edgar1986"],
	addUser: function(name, surname, age, username, password) {
			this.name.push(name);
			this.surname.push(surname);
			this.age.push(age);
			this.username.push(username);
			this.password.push(password);
		//ays mas@ stugman hamar e
		/*for(let i = 0, len = this.name.length; i < len; i++) {
			console.log(`${this.name[i]} ${this.surname[i]} ${this.age[i]}`);
		}*/
	},
	login: function(username, password) {
		let count = 0;
		for(let i = 0, len = this.name.length; i < len; i++) {
			if(this.username[i] === username && this.password[i] === password) {
				console.log(`Hellow ${this.name[i]} ${this.surname[i]}`);
				break;
			} else {
				count++;
			}
			if(count === this.name.length) {
				console.log("Nman tvyalnerov ogtater goyutyun chuni");
			}
		}
	},
	deleteUser: function(username, password) {
		for(let i = 0, len = this.name.length; i < len; i++) {
			if(this.username[i] === username && this.password[i] === password) {
				this.name.splice(i, 1);
				this.surname.splice(i, 1);
				this.age.splice(i, 1);
				this.username.splice(i, 1);
				this.password.splice(i, 1);
			}
		}
		//ays mas@ stugman hamar e
		/*for(let i = 0, len = this.name.length; i < len; i++) {
			console.log(`${this.name[i]} ${this.surname[i]} ${this.age[i]}`);
		}*/
	},
	printUserInfo: function(name){
		for(let i = 0, len = this.name.length; i < len; i++) {
			if(this.name[i] === name){
				console.log(`${this.name[i]} ${this.surname[i]} ${this.age[i]}`);
			}
		}
	},
};
user.addUser("David", "Manukyan", 27, "dddddddd", "dddddddddd");
user.login("dddddddd", "dddddddddd");
user.deleteUser("edgar1986", "edgar1986");
user.printUserInfo("Gor");
user.printUserInfo("David");