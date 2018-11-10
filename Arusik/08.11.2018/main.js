let Users = {
	name: ['Arpine', 'Tatev', 'Nare', 'Lilit', 'Narek'],
	surname: ['Harutyunyan', 'Avagyan', 'Sargsyan', 'Hakobyan', 'Minasyan'],
	age: [25, 18, 30, 21, 28],
	username: ['usn1', 'usn2', 'usn3', 'usn4', 'usn5'],
	passw: ['pass1', 'pass2', 'pass3', 'pass4', 'pass5'],
	adduser: function(name, surname, age, username, passw){
		let l = this.name.length;
		Users.name[l] = name;
		Users.surname[l ] = surname;
		Users.age[l] = age;
		Users.username[l] = username;
		Users.passw[l] = passw;
		console.log(Users);
	},
	login: function(username, passw        )   {
		for (let i = 0, l = this.username.length; i <= l; i++){
			if(this.username[i] === username && this.passw[i] === passw){
				console.log('Hellow dear user!!!');
			break;
			}else
				console.log('sorry, but this user is not found!!!');
		}
	},
	/*deleteUser: function(username, passw) {
		for (let i = 0, l = this.username.length; i <= l; i++){
			if (this.username[i] ===username && this.passw[i] === passw)
				delete this.name[i];
				delete this.surname[i];
				delete this.age[i];
				delete this.username[i];	
				delete this.passw[i];
		}
	},*/
	printUser: function(name){
		for (let i = 0, l = this.name.length; i <= l; i++){
			if (name === this.name[i]){
				console.log(`${this.name[i]} ${this.surname[i]} ${this.age[i]}`);
			}
		}
	}
}

Users.adduser("Karen", "Lalayan", 23, "usn6", "pass6");
Users.login('usn11', 'pass11');
//deleteUser("usn2","pass2");
Users.printUser("Tatev");