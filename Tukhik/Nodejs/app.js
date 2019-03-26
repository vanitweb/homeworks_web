var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var users = require("./data.json");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
	res.send("Hello");
})

app.get('/users', function (req, res) {
	
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
module.exports = app;