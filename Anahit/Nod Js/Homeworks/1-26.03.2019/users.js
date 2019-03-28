var express = require('express');
var router = express.Router();

 const jsonfile = require('jsonfile');
 const filePath = './data/users.json';
// const fs = require("fs");

/* GET users listing*/
// 1. Create new user - name, surname, age, gender, email 
router.post('/', function(req, res) {
    jsonfile.readFile(filePath, "utf8", function(error,data){ 
    	if(!data || error ){
      		return res.status(500).send("server error");
        }  
        if(!req.body || !req.body.name || !req.body.surname || !req.body.email){
        	return res.status(400).send("Bad Request");
        }
        let id = 0;
        for(let item in data) {
        	id = Number(item) + 1;
        }
        data[id] = {
        	 "name": req.body.name,
	         "surname": req.body.surname,
	         "age": req.body.age,
	         "gender": req.body.gender,
	         "email": req.body.email
        }
        jsonfile.writeFile(filePath, data , "utf8",function(err, data) {
      		res.status(200).send("Ok");
        })
    }); 
});

// /*2. Get all users - name, surname, age*/
router.get('/', function(req, res) {
    jsonfile.readFile(filePath, "utf8", function(error,data){ 
    	if(!data || error ){
      		return res.status(500).send("server error");
        }  
        let returnObj = {};
        for(let item in data) {
    	    returnObj[item] = {"name": data[item].name, "surname": data[item].surname, "age": data[item].age};
           
        }
        res.status(200).send(returnObj);      
    }); 
});


// 3. Update user - id, name, surname, age, gender, email
router.put('/:id', function(req, res) {
    jsonfile.readFile(filePath, "utf8", function(error,data){ 
    	if(!data || error ){
      		return res.status(500).send("server error");
        }  
        if(!req.body || !req.body.name || !req.body.surname || !req.body.email){
        	return res.status(400).send("Bad Request");
        }
        
        let id = req.params.id;
        data[id] = {
        	 "name": req.body.name,
	         "surname": req.body.surname,
	         "age": req.body.age,
	         "gender": req.body.gender,
	         "email": req.body.email
        }
        jsonfile.writeFile(filePath, data , "utf8",function(err, data) {
      		res.status(200).send("Ok");
        })
    }); 
});


// 4. Get specific user details - name, surname, age, gender, email (id request param)
// 5. Delete user - id (request param)

// {
//     "1": {
//         "name": "Anna",
//         "surname": "Vardanyan",
//         "age": 15,
//         "gender": "femininity",
//         "email": "emailAnna"
//     },
//     "2": {
//         "name": "Aram",
//         "surname": "Sardaryan",
//         "age": 18,
//         "gender": "masculinity",
//         "email": "emailAram"
//     },
//     "3": {
//         "name": "Ani",
//         "surname": "Mamyan",
//         "age": 30,
//         "gender": "femininity",
//         "email": "emailAni"
//     },
//     "4": {
//         "name": "Mariam",
//         "surname": "Stepanyan",
//         "age": 17,
//         "gender": "femininity",
//         "email": "emailMariam"
//     }
// }

 module.exports = router;
