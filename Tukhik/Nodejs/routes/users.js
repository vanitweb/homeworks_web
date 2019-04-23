var express = require('express');
var router = express.Router();
const jsonfile = require('jsonfile');
const filePath = './data/users.json';

/* GET users all */
router.get('/', function(req, res) {
    jsonfile.readFile(filePath, function (err, obj) {
        if(err) {
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
        if(err) {
			return res.status(500).send("External server error");
		}
		const userID = req.params.id;
		if(!(obj.users[userID])) {
			return res.status(404).send("Data not found");
		}
        res.status(200).send(obj.users[userID]);
    })
});


/* add new user. */
router.post('/', function(req, res) {
    jsonfile.readFile(filePath, function (err, obj) {
        if(err) {
			return res.status(500).send("There was an error reading the file!");
		}
		if(!req.body || req.body.name === "" || req.body.name === "" || req.body.email === "") {
            return res.status(400).send("Bad request");
        }
        const key = Date.now();
        obj.users[key] = {
            id: key,
            name: req.body.name,
            surname: req.body.surname,
            age: req.body.age,
            gender: req.body.gender,
            email: req.body.email
        }
	     jsonfile.writeFile(filePath, obj, function(err, obj) {
            if(err) {
                return res.status(500).send("External server error");
            }
            res.status(200).send("ok");
        })
	
    })
});



/* Change user data. */
router.put('/:id', function(req, res) {
    jsonfile.readFile(filePath, function (err, obj) {
        if(err) {
			return res.status(500).send("External server error");
		}
        if(!req.body || req.body.name === "" || req.body.name === "" || req.body.email === "") {
            return res.status(400).send("Bad request");
        }
        const key = req.params.id;
        if(!obj.users[key]) {
            return res.status(404).send("Data not found");
        }
        obj.users[key].name = req.body.name;
        obj.users[key].surname = req.body.surname;
        obj.users[key].age = req.body.age;
        obj.users[key].gender = req.body.gender;
        obj.users[key].email = req.body.email;
        jsonfile.writeFile(filePath, obj, function(err, obj) {
            if(err) {
                return res.status(500).send("External server error");
            }
            res.status(200).send("ok");
        })
    })
});


/* Delete user  */
router.delete('/:id', function(req, res) {
    jsonfile.readFile(filePath, function (err, obj) {
        if(err) {
			return res.status(500).send("External server error");
		}
        const userID = req.params.id;
        if(!obj.users[userID]) {
            return res.status(400).send("Bad request");
        }
        delete obj.users[userID];
        jsonfile.writeFile(filePath, obj, function(err, obj) {
            if(err) {
                return res.status(500).send("External server error");
            }
        res.status(204).send("No Content");
        })
    })
});
module.exports = router;