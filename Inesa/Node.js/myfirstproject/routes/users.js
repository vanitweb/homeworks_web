var express = require('express');
var router = express.Router();
var users = [
	{
		id:1,
		name:"Armine",
		surname:"Isahakyan",
		age:"15"
	},
	{
		id:2,
		name:"Vardan",
		surname:"Karapetyan",
		age:"25"
	},
	{
		id:3,
		name:"Ani",
		surname:"Hakobyan",
		age:"22"
	}
];


/* GET users listing. */

router.get('/', function(req, res) {
  res.send(users);
});

router.get('/:id', function (req, res) {
	var user = users.find(function(user) {
		return user.id === Number(req.params.id);
	});
	res.send(user);
});

router.post('/', function(req, res)
{
	var user={    
		id:Date.now(),
		name:req.body.name
	};
	users.push(user);
	res.sendStatus(200);
});




module.exports = router;
