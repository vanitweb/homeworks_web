var express = require('express');
var router = express.Router();
const jsonfile = require('jsonfile');
const file = './data/users.json';

/* GET users listing. */
router.get('/', function(req, res) {
  jsonfile.readFile(file, function (err, obj) {
  if (err) console.error(err)
  console.dir(obj)
})
});

module.exports = router;