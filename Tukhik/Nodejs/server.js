var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


var artists = [ 
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

app.get('/artists', function (req, res) {
	res.send(artists);
})

app.get('/artists/:id', function (req, res) {
	console.log(req.params);
	var artist = artists.find(function(artist){
		return artist.id === Number(req.params.id);
	});
	res.send(artist);
})

app.post('/artists/', function(req, res){
	var artist = {
		id: Date.now(),
		name: req.body.name,
		surname: req.body.surname,
		age: req.body.age,
		gender: req.body.gender,
		email: req.body.email
	}
	artists.push(artist);
	res.send(artist);
})

app.put('/artists/:id', function(req, res) {
	var artist = artists.find(function(artist){
		return artist.id === Number(req.params.id);
	});
	artist.name = req.body.name;
	artist.surname = req.body.surname;
	artist.age = req.body.age;
	artist.gender = req.body.gender;
	artist.email = req.body.email;
	res.sendStatus(200);
})

app.delete('/artists/:id', function(req, res){
	artists = artists.filter(function(artist){
		return artist.id !== Number(req.params.id);
	})
	res.sendStatus(200);
})

app.listen(3012, function() {
	console.log("API app started")
})