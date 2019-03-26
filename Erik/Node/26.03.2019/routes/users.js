var express = require('express');
var router = express.Router();
var userall = require('./../PROJECT_PATH/data/users.json');
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
	let users = [];
	userall.forEach(function(item) {
  		users.push({"name" : item.name, "surname" : item.surname, "age" : item.age});
	});
  	res.send(users);
});

router.post('/', function(req, res, next) {
	req.body.id = userall[userall.length - 1].id  + 1;
	userall.push(req.body);
	res.send(userall);
});

router.get('/:id', function(req, res, next){
	userall.forEach(function(item){
		if (item.id === req.params.id*1) {
			res.send(item);
		}
		
	});
	res.send("a");
});
router.delete('/:id',function(req,res){
    userall.forEach(function(item, index){
    	if (item.id === req.params.id*1) {
			userall.splice(index, 1);
		}

    });
    res.send(userall);
});
module.exports = router;
