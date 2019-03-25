var express = require('express');
var router = express.Router();
var users = [
{
	id: 1,
	name: 'Ani',
	surname: 'Hakobyan',
	age: 25,
	gender: 'female',
	email: 'ani.hakobyan12@mail.ru'
},
{	
	id: 2,
	name: 'Arman',
	surname: 'Araratyan',
	age: 18,
	gender: 'male',
	email: 'arman.araratyan90@mail.ru'

},
{
	id: 3,
	name: 'Maria',
	surname: 'Nikoghosyan',
	age: 52,
	gender: 'female',
	email: 'marianikoghosyan@mail.ru'
},
{
	id: 3,
	name: 'Lilia',
	surname: 'Amiryan',
	age: 24,
	gender: 'female',
	email: 'lilia.95@mail.ru'
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
})
module.exports = router;
