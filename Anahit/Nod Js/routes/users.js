var express = require('express');
var router = express.Router();
var users = require('./../data/users.json');

/* GET users listing*/
/*1. Create new user - name, surname, age, gender, email */
router.post('/', function(req, res) {
  let addUser = req.body;
  addUser.id = users[users.length - 1].id + 1;
  users.push(addUser);
  res.send(users[users.length - 1]);
});


/*1. Create new user - name, surname, age, gender, email */
router.post('/', function(req, res, next) {
  res.send(id, name, surname, age, gender, email){
      users.push(
          {
          "id": id,
          "name": name,
          "surname": surname,
          "age": age,
          "gender": gender,
          "email": email
          }
      );
  };

});
/*2. Get all users - name, surname, age*/
router.get('/', function(req, res, next) {
  res.send( users.map(item => {
      return {"name": item.name,"surname": item.surname, "age": item.age}
  }));
});

/*3. Update user - id, name, surname, age, gender, email*/
router.put('/', function(req, res, id, name, surname, age, gender, email) {
    users.map(item => {
         if(item.id === id) {
	     item.name = name;
             item.surname = nurname;
             item.age = age;
             item.email = email;
         }
  });
});


/*4. Get specific user details - name, surname, age, gender, email (id request param)*/
/*5. Delete user - id (request param)*/
router.delete('/', function(req, res, id) {
  res.send( users.map(item => {
      return item.id === id;   
  }));
});


module.exports = router;
