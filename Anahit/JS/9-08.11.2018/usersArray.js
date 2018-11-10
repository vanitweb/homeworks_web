// Task usersArray
let user = {
    name: ['Anna','Ani','Aram'],
    surname: ['Vardanyan','Qaramyan','Axajanyan'],
    age: [15,28,31],
    username: ['An15','AnQar','Ar31'],
    password: ['5646gg','uj222','hjj888'],
    addUser: function(name,surname,age,username,password) {
        this.name.push(name);
        this.surname.push(surname);
        this.age.push(age);
        this.username.push(username);
        this.password.push(password);
    },
    login: function(username,password) {
        let count = 0;
        for(let usname of this.username) {
            if(username === usname) {
                for(let pass of this.password) {
                    if(password === pass) {
                        count ++;
                        console.log(`Hello ${username}`);
                    }
                }
            } 
        } 
        if(count === 0) {
           console.log("user not found");
        }
    },
    deleteUser: function(username, password) {
        let index = 0;
        for(let usname of this.username) { 
            if(username === usname) {
                for(let pass of this.password) {
                    if(password === pass) {
                        delete this.name[index];
                        delete this.surname[index];
                        delete this.age[index];
                        delete this.username[index];
                        delete this.password[index];

                    }
                }
            }
        index ++; 
        }     
    },
    printUserInfo: function(name) {
        let index = 0;
        for(let usname of this.name){
            if(usname === name){
                console.log(this.name[index]);
                console.log(this.surname[index]);
                console.log(this.age[index]);
            }
        index ++;
        }
    }
}
console.log(user);
user.addUser('Karen','Balayan',19,'karbal','487ssa');
console.log(user);
user.login('AnQar','uj222');
user.login('sdsd',464);
user.deleteUser('AnQar','uj222');
console.log(user);
user.printUserInfo('Aram');
