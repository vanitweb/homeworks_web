var express = require('express');
var router = express.Router();
var jsonData = require('../data/users.json')
var bodyParser = require('body-parser')
router.use( bodyParser.json() );
router.use( bodyParser.urlencoded({extended:true}) );


/*Get specific user details*/
router.get('/:id/:keyName', function(req, res, next) {
	let specificId1 = req.params.id;
	let specificId2 = req.params.keyName;
var usere = jsonData.array.find(function(usere){
		return usere.id === Number(req.params.id);
	});
	console.log( `User N${specificId1} ${specificId2} is: ` + jsonData.array[specificId1][specificId2]);
	res.send(`User N${specificId1} ${specificId2} is: ` + jsonData.array[specificId1][specificId2])

});
module.exports = router;