const obj = {
	 Garik : {
	 	 name : 'Garik',
	 	 surname : 'Iskandaryan',
	 	 age : 21,
	 	 username : 'Garik',
	 	 password : 789654,
	 },
	 addUser : function (name, surname, age, username, password) {  
         this[name] = {
         name : name,
         surname : surname,
         age : age,
         username : username,
         password : password
	 	 }
     },
    login : function(username,  password){
        let bool = false;
        let i;
        for(i in this){
            if(typeof(this[i]) === "function"){
                continue;
            }
            if(this[i].username === username && this[i].password === password){
                bool = true;
                break;
            }   
        }
        if(bool === true){
            console.log(`Hello ${i}`);
        }else{
            console.log(`Undefined user`);
        }
    },
    deleteUser : function(username,  password){
        let bool = false;
        let i;
        for(i in this){
            if(typeof(this[i]) === "function"){
                 continue;
            }
            if(this[i].username === username && this[i].password === password){
                bool = true;
                break;
            }   
        }
        if(bool === true){
            delete this[i];
        }else{
            console.log(`Undefined user`);
        }
    },
    printUserInfo : function(name){
        let i;
        let bool = false;
        for(i in this){
            if(typeof(this[i]) === "function"){
                 continue;
            } 
            if(i === name){
                bool = true;
                break;
            }
        }
        if(bool === true){
            console.log(`name - ${this[i].name} \nsurname - ${this[i].surname} \nage - ${this[i].age}`)
        }else{
            console.log(`Undefined user`);
        }
    }
};

obj.addUser("Tigran", "Qochinyan", 19, "Tigran", 456123);
obj.login("Garik", 789654);
obj.deleteUser("Garik", 789654)
obj.printUserInfo("Tigran")
console.log(obj)