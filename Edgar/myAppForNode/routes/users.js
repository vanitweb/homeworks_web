
/*For Testing...*/

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
router.use( bodyParser.json() );
router.use( bodyParser.urlencoded({extended:true}) );

const Heroes = [
	{ 	
		id: 1,
		name: "Gondar",
		email: "example1@gmail.com",
		surname: "Levonyan"
	}, 
	{   
		id: 2,
	    name: "Antimag",
	    email: "example2@gmail.com",
	    surname: "Charenc"
	},
	{   
		id: 3,
	    name: "Balanar",
	    email: "example3@gmail.com",
	    surname: "Gasparyan"
	}
];


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send(Heroes);
});
/* GET users by ID. */
router.put('/:id', function(req, res, next) {
	let paramsChanger = req.params.id;
	console.log(paramsChanger);
var usere = Heroes.find(function(usere){
		return usere.id === Number(req.params.id);
	});
    usere.name = req.body.name;
	res.json (usere);
});


module.exports = router;