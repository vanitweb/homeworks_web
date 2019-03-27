// var express = require('express');
// var router = express.Router();

// const jsonfile = require('jsonfile');
// const filePath = './../data/users.json';
//const fs = require("fs");

/* GET users listing*/
// 1. Create new user - name, surname, age, gender, email 

// /*2. Get all users - name, surname, age*/

// router.post('/', function(req, res) {
//   jsonfile.readFile("filePath", "utf8", function(error,data){ 
//     if(!data || error){
//       return res.status(500).send("server error");
//     }  
//     let returnObj = {};
//     for(item in filePath) {
//             returnObj[item] = {"name":filePath[item].name, "surname": filePath[item].surname, "age": filePath[item].age};
//         }
//         res.status(200).send(returnObj);
//     });
  
// });



// /*2. Get all users - name, surname, age*/
// router.get('/', function(req, res, next) {
//   res.send( users.map(item => {
//       return {"name": item.name,"surname": item.surname, "age": item.age}
//   }));
// });

// /*3. Update user - id, name, surname, age, gender, email*/
// router.put('/', function(req, res, id, name, surname, age, gender, email) {
//     users.map(item => {
//          if(item.id === id) {
// 	     item.name = name;
//              item.surname = nurname;
//              item.age = age;
//              item.email = email;
//          }
//   });
// });


// /*4. Get specific user details - name, surname, age, gender, email (id request param)*/
// /*5. Delete user - id (request param)*/
// router.delete('/', function(req, res, id) {
//   res.send( users.map(item => {
//       return item.id === id;   
//   }));
// });


 module.exports = router;
