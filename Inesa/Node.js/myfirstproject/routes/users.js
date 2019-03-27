var express = require('express');
var router = express.Router();
const jsonfile = require('jsonfile');
const filePath = './data/data.json';


router.get('/', function(req, res) 
{
    jsonfile.readFile(filePath, function (err, obj) 
	{
        if(!obj) 
		{
			return res.status(500).send("External server error");
		}
        const data = {};
        for(item in obj.data) //?????
		{
            data[item] = {"name":obj.data[item].name, "surname": obj.data[item].surname, "age": obj.data[item].age}
        }
        res.status(200).send(data);
    })
});


router.get('/:id', function(req, res) {
    jsonfile.readFile(filePath, function (err, obj) {
        if(!obj) {
			return res.status(500).send("External server error");
		}
		const dataID = req.params.id;
		if(!(obj.data[dataID])) {
			return res.status(404).send("Data was not found with the given id");
		}
        res.status(200).send(obj.data[dataID]);
    })
});

router.post('/', function(req, res) {
    jsonfile.readFile(filePath, function (err, obj) {
        if(!obj) {
			return res.status(500).send("External server error");
		}
        const key = (new Date()).getTime();
        obj.users[key] = {
            id: key,
            name: req.body.name,
            surname: req.body.surname,
            age: req.body.age,
            gender: req.body.gender,
            email: req.body.email
        }
        jsonfile.writeFile(filePath, obj, function(err, obj) {
            if (err) console.error(err)
            res.status(200).send("ok");
        })
    })
});

router.delete('/:id', function(req, res) {
    jsonfile.readFile(filePath, function (err, obj) {
        if(!obj) {
			return res.status(500).send("External server error");
		}
        delete obj.users[req.params.id];
        jsonfile.writeFile(filePath, obj, function(err, obj) {
            if (err) console.error(err)
            res.status(200).send("ok");
        })
    })
});

router.put('/:id', function(req, res) {
    jsonfile.readFile(filePath, function (err, obj) {
        if(!obj) {
			return res.status(500).send("External server error");
		}
        const key = req.params.id;
        obj.users[key] = {
            id: key,
            name: req.body.name,
            surname: req.body.surname,
            age: req.body.age,
            gender: req.body.gender,
            email: req.body.email
        }
        jsonfile.writeFile(filePath, obj, function(err, obj) {
            if (err) console.error(err)
            res.status(200).send("ok");
        })
    })
});

/* GET users listing. */
/*
router.get('/', function(req, res) {
  res.send(users);
});

router.get('/:id', function (req, res) {
	var user = users.find(function(user) {
		return user.id === Number(req.params.id);
	});
	res.send(user);
});

router.post('/', function(req, res)
{
	var user={    
		id:Date.now(),
		name:req.body.name
	};
	users.push(user);
	res.sendStatus(200);
});
*/

module.exports = router;
