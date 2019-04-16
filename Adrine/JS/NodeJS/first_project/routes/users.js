var express = require('express');
const jsonfile = require('jsonfile');
var router = express.Router();
const filePath = './data/users.json';

/* GET users listing. */
router.get('/', function(req, res) {
  jsonfile.readFile(filePath, function(err, obj) {
	  if(err){
		  return
	  res.status(500).send("External server error");
	  }
	  res.send(users);
  })
});
router.get('/:id', function(req, res) {
    jsonfile.readFile(filePath, function (err, obj) {
        if(err) {
			return res.status(500).send("External server error");
		}
		const userID = req.params.id;
		if(!obj.users[userID]) {
			return res.status(404).send("Data not found");
		}
        res.status(200).send(obj.users[userID]);
    })
});
module.exports = router;
