var express = require('express');
var router = express.Router();
var jsonData = require('../data/users.json')
var bodyParser = require('body-parser')

router.use( bodyParser.json() );
router.use( bodyParser.urlencoded({extended:true}) );




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'First app in Express' });
});

router.get('/allusers', function(req, res, next) {
    res.send(jsonData);
});

/* GET users by ID. */
router.get('/allusers/:id', function(req, res, next) {

	const count = Number(req.params.id);
	if (count == 0) {
	 res.send(jsonData.array[0]);
	}else
     res.send(jsonData.array[count-1]);
});
/* Delete User */
router.delete('/allusers/:id', function(req, res, next) {
var usere = jsonData.array.filter(function(usere){
		return usere.id !== Number(req.params.id);
	});
 
	res.send (usere);
})


module.exports = router;
