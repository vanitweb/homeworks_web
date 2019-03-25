var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var fs = require("fs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//2-rd ketn e mnum

var users = [ 
	{id: 1,
	name: 'Any',
	surname: 'Nazaretyan',
	age: 22,
	gender: 'female',
	email: 'anyNaz@mail.ru'
	},
	{id: 2,
	name: 'Olga',
	surname: 'Igityan',
	age: 25,
	gender: 'female',
	email: 'OlgaIgit@mail.ru'
	},
	{id: 3,
	name: 'Vasya',
	surname: 'Proshyan',
	age: 21,
	gender: 'male',
	email: 'Vasya@mail.ru'
	}
]

app.get('/', function (req, res) {
	res.send("Hello");
})

app.get('/users', function (req, res) {
	var users = fs.readFileSync("data.json", "utf8");
	res.send(users);
})

app.get('/users/:id', function (req, res) {
	console.log(req.params);
	var user = users.find(function(user){
		return user.id === Number(req.params.id);
	});
	res.send(user);
})

app.post('/users/', function(req, res){
	var user = {
		id: Date.now(),
		name: req.body.name,
		surname: req.body.surname,
		age: req.body.age,
		gender: req.body.gender,
		email: req.body.email
	}
	users.push(user);
	res.send(user);
})

app.put('/users/:id', function(req, res) {
	var user = users.find(function(user){
		return user.id === Number(req.params.id);
	});
	user.id = req.body.id;
	user.name = req.body.name;
	user.surname = req.body.surname;
	user.age = req.body.age;
	user.gender = req.body.gender;
	user.email = req.body.email;
	res.sendStatus(200);
})

app.delete('/users/:id', function(req, res){
	users = users.filter(function(user){
		return user.id !== Number(req.params.id);
	})
	res.sendStatus(200);
})

app.listen(3012, function() {
	console.log("API app started")
})