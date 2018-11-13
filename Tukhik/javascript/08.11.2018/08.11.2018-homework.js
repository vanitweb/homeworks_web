const persons = {
	userNames : [
	{
		name : "Anna",
		surname : "Aghaloyan",
		age : "29",
		username : "Anna",
		password : "logo"
	},
	{
		name : "Elianora",
		surname : "Grigoryan",
		age : "45",
		username : "El",
		password : "logo"
	},
	{
		name : "Lianna",
		surname : "Babayan",
		age : "18",
		username : "Lil",
		password : "logo"
	}
],
 'addUser': function(name, surname, age, username, password) {
        return this.userNames.push({
            name: name,
            surname: surname,
            age: age,
            username: username,
            password: password
        });
    },
    'login': function(username, password) {
        let val, val1;
        for (let i in this.userNames) {
            val = this.userNames[i].username;
            val1 = this.userNames[i].password;
            if (val === username && val1 === password) {
                console.log(`Barev ${this.userNames[i].username}`);
                break;
            }
            if (val !== username || val1 !== password) {
                console.log("nman mard chka");
                 break;
            }
        }
    },
    'delete': function(username, password) {
        for (let i in this.userNames) {
            if (this.userNames[i].username === username && this.userNames[i].password === password) {
                delete persons.userNames[i];
            }
        }
    },
    'printuserInfo': function(name) {
        for (let u in this.userNames) {
            if (this.userNames[u].name === name) {
                console.log(`Name: ${this.userNames[u].name}\nSurname: ${this.userNames[u].surname}\nAge: ${this.userNames[u].age}`);
            }
        }
    }
};

console.log(persons);
persons.login("Lianna", "Lil");
persons.delete("Lianna", "Lil");
persons.login("Lianna", "Lil");