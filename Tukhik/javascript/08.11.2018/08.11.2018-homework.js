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
login: function(username, password) {
        let val, val1;
        for (let i in this.userNames) {
            val = this.userNames[i].username;
            val1 = this.userNames[i].password;
            if (val === username && val1 === password) {
                console.log(`Hello ${this.userNames[i].username}`);
                break;
            }
            else {
              console.log('chka nman user');
        }
    }
},
// delete: function(username, password) {
//         for (let i in this.userNames) {
//             if (this.userNames[i].username === username && this.userNames[i].password === password) {
//                 delete persons.userNames[i];
//             }

//         }
//     },
printUserInfo: function(name) {
        for (let j in this.userNames) {
            if (this.userNames[j]	.name === name) {
              return this.userNames[j];
            }
        }
    }
}
console.log(persons);
persons.login("Anna", "logo");
//persons.delete("Anna", "logo");
console.log(persons.printUserInfo("Anna"));

