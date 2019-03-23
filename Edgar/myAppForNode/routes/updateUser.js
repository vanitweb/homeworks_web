var express = require('express');
var router = express.Router();
var jsonData = require('../data/users.json')
var bodyParser = require('body-parser')

router.use( bodyParser.json() );
router.use( bodyParser.urlencoded({extended:true}) );


router.get('/', function(req, res, next) {
  res.render('index', { title: 'First app in Express' });
});

/* Update user  */
router.put('/:id/changeParams', function(req, res) {
		let UpdateArr=[];
	for (const key in req.body) {
		jsonData.array[req.params.id][key] = req.body[key];
		UpdateArr.push(jsonData.array[req.params.id]);
}
		res.send (UpdateArr);
	
});

module.exports = router;
