const abj = {
	 Erik : {
	 	 name : 'Erik',
	 	 surname : 'Papyan',
	 	 age : 20,
	 	 username : 'Erik',
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
            console.log(Hello ${i});
        }else{
            console.log(Undefined user);
        }
    },
    deleteUser: function (username, password) {
        let bool = false;
        let i;
        for (i in this) {
            if(typeof(this[i]) === "function"){
                continue;
            }
            if(this[i].username === username && this[i].password === password){
                bool = true;
                break;
            }       
        }
        if(bool === true) {
            delete this[i];
        }else{
            console.log(Undefined user);
        }
    },
    printUserInfo : function (name) {
        let i;

        for (i in this) {
            if(typeof(this[i]) === "function") {
                continue;
            }
            if (name === i) {
                console.log(name ${this[i].name})
            }
            // else{
            //     console.log(Undefined user);
            // }
        }
    }
};
console.log(abj)
abj.addUser("Vardan", "Vardanyan", 96, "Vardan", 4561236);
// abj.login("Erik", 789654);
// abj.deleteUser("Vardan" , 4561236);
abj.printUserInfo("Erik");