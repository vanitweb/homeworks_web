var express = require('express');
var router = express.Router();
let users = require('./../PROJECT_PATH/data/users.json');
/* GET users listing. */
//1. Create new user - name, surname, age, gender, email
router.post('/', function (req, res) {
    let newUser = req.body;
    newUser.id = users[users.length -1].id + 1;
    users.push(newUser)
    res.send(users[users.length -1]);
});
//2  Get all users - name, surname, age
router.get('/', function(req, res, next) {
  res.send(users.map(item => {
      return {"name" : item.name, "surname" : item.surname, "age" : item.age}
    }));
});
//3. Update user - id, name, surname, age, gender, email
router.put('/:id', function(req, res, next) {
    if(users[req.params.id -1] !== undefined){
        users[req.params.id -1] = req.body;
        users[req.params.id -1].id = req.params.id;
        res.send(users[req.params.id -1]);
    }else{
        res.send("")
    }
});
//4. Get specific user details - name, surname, age, gender, email (id request param)
router.get('/:id', function (req, res) {
    if(users[req.params.id -1] !== undefined){
        res.send(users[req.params.id -1]);
    }else{
        res.send("")
    }
    
});
//5. Delete user - id (request param)
router.delete('/:id', function (req, res) {
    if(users[req.params.id -1] !== undefined){
        users.splice(req.params.id -1, 1)
        for(let i = req.params.id -1; i < users.length; i++){
            users[i].id = i + 1;
        }
        res.send(users);
    }else{
        res.send("")
    }
    
});
module.exports = router;
