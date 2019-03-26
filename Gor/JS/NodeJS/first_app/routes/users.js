var express = require('express');
var router = express.Router();
const jsonfile = require('jsonfile');
const filePath = './data/users.json';

/* GET users listing. */
router.get('/', function(req, res) {
    jsonfile.readFile(filePath, function (err, obj) {
        if(!obj) {
			return res.status(500).send("External server error");
		}
        const users = {};
        for(item in obj.users) {
            users[item] = {"name":obj.users[item].name, "surname": obj.users[item].surname, "age": obj.users[item].age}
        }
        res.status(200).send(users);
    })
});

/* GET user by ID. */
router.get('/:id', function(req, res) {
    jsonfile.readFile(filePath, function (err, obj) {
        if(!obj) {
			return res.status(500).send("External server error");
		}
		const userID = req.params.id;
		if(!(obj.users[userID])) {
			return res.status(404).send("Data was not found with the given id");
		}
        res.status(200).send(obj.users[userID]);
    })
});

/* Add a new user. */
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

/* Delete user data. */
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

/* Change user data. */
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

module.exports = router;