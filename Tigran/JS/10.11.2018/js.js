const Users = {
	Tigran : {
	 	 name : 'Tigran',
	 	 surname : 'Kochinyan',
	 	 age : 19,
	 	 username : 'Tigo',
	 	 password : 12345678,
	},
	addUser : function (name,surname,age,username,password) {  
	   	this[name] = {
	   		name : name,
	   		surname : surname,
	   		age : age,
	   		username : username,
	   		password : password,
	   	};
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
            console.log(`Hello ${i}`)
        }else{
            console.log('Undefined user')
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
            console.log('Undefined user');
        }
    },
    printUserInfo : function (name) {
    	let i;
    	let bool = false;
    	for(i in this){
            if(typeof(this[i]) === "function"){
                continue;
            }
            if (name === i) {
            	bool = true;
            	break;
            }
        }
        if (bool) {
            console.log(`anun ${this[i].name}, azganun ${this[i].surname}, tariq ${this[i].age}`);
        }else{
            console.log("chgtnvac user")
        }    
    }
};
Users.addUser("TIGO","azg",45,"logog","dddd");

// Users.login("logog","dddd");
// Users.deleteUser("logog","dddd");
// Users.printUserInfo("TIGO");



































