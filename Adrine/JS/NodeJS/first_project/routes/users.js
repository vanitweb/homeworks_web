var express = require('express');
const jsonfile = require('jsonfile');
var router = express.Router();
const filePath = '.data/users.json';

/* GET users listing. */
router.get('/', function(req, res) {
  jsonfile.readFile(file, function(err, obj) {
	  if(err) console.log(err);
	  const users = {};
	  for (item in obj.users) {
		  users[item] = {"name":obj.users[item].name, "surname":obj.users[item].surname, "age":obj.users[item].age}
	  }
	  res.send(users);
  })
});
router.get('/:id', function (req, res) {
	var user = users.find(function(user) {
		return user.id === Number(req.params.id);
	});
	res.send(user);
})
module.exports = router;
