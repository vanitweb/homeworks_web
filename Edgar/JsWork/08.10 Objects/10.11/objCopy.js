var persons = {
    'person__1': [{
            name: "Hakob",
            surname: "Paronyan",
            age: 54,
            username: "HakobP",
            password: "Hakob_054",
        },
        {
            name: "Levon",
            surname: "Sarjan",
            age: 61,
            username: "Lev",
            password: "Levomicidin",
        },
        {
            name: "Armine",
            surname: "Kroyan",
            age: 28,
            username: "Armin",
            password: "hayastan2018",
        },
        {
            name: "Karine",
            surname: "kroyan",
            age: 41,
            username: "LevKar",
            password: "loveForever",
        },
    ],
    'addUser': function(name, surname, age, username, password) {
        return this.person__1.push({
            name: name,
            surname: surname,
            age: age,
            username: username,
            password: password
        });
    },
    'login': function(username, password) {
        let val,val1;
        for (let i in this.person__1) {
            val = this.person__1[i].username;
            val1 = this.person__1[i].password;
            if (val === username && val1 === password) {
                console.log(`Barev ${this.person__1[i].username}`);
            }
            else if(!( i !== username)) {
                 console.log("nman mard chka");
        }
    }},
    'delete': function(username, password) {
        for (let i in this.person__1) {
            if (this.person__1[i].username === username && this.person__1[i].password === password) {
                delete persons.person__1[i];
            }
        }
    },
    'printuserInfo': function() {
        for (let u of this.person__1) {
            console.log(u);
        }
    }
};
/*console.log("person__1", persons);
persons.addUser('Edgar', 'Nikoghosyan', 32, 'Sebo', 'Sebastian');
console.log("person__1", persons);
persons.login('LevKar','loveForever');*/
/*console.log("person__1", persons);
persons.delete( 'HakobP','Hakob_054');
console.log("person__1", persons);*/
// persons.printuserInfo();
console.log(persons.login('LevKar', 'loveForever'));