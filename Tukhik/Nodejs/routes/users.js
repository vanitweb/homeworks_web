var express = require('express');
var router = express.Router();
const jsonfile = require('jsonfile');
const filePath = './data/users.json';

/* GET users all */
router.get('/', function(req, res) {
    jsonfile.readFile(filePath, function (err, obj) {
        if(err) {
			return res.status(500).send("There was an error reading the file!");
		}
		const users = {};
        for(item in obj.users) {
            users[item] = {"name":obj.users[item].name, "surname": obj.users[item].surname, "age": obj.users[item].age}
        }
       // for (var key in users)
        //if (users.hasOwnProperty(key)) {
			res.status(200).send(users);
		//}
        //return res.status(500).send("data is empty");
		
    })
});

/* GET user by ID. */
router.get('/:id', function(req, res) {
    jsonfile.readFile(filePath, function (err, obj) {
        if(err) {
			return res.status(500).send("There was an error reading the file!");
		}
		const userID = req.params.id;
		if(!(obj.users[userID])) {
			return res.status(404).send("Data was not found with the given id");
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
        const key = Date.now();
        obj.users[key] = {
            id: key,
            name: req.body.name,
            surname: req.body.surname,
            age: req.body.age,
            gender: req.body.gender,
            email: req.body.email
        }
	 if(Object.keys(obj.users[key])==['id', 'name', 'surname', 'age', 'gender', 'email']){
        jsonfile.writeFile(filePath, obj, function(err, obj) {
            if (err) console.error(err)
            res.status(200).send("ok");
        })
	 }
	 else {
		res.status(500).send("have missing  or additional keys");
	 }
    })
});



/* Change user data. */
router.put('/:id', function(req, res) {
    jsonfile.readFile(filePath, function (err, obj) {
        if(err) {
			return res.status(500).send("There was an error reading the file!");
		}
        const key = req.params.id;
		if((typeof key) !="string"){
			return res.status(500).send("ID - not string");
            }
        obj.users[key] = {
            id: key,
            name: req.body.name,
            surname: req.body.surname,
            age: req.body.age,
            gender: req.body.gender,
            email: req.body.email
        }
		 if(Object.keys(obj.users[key])==['id', 'name', 'surname', 'age', 'gender', 'email']){
        jsonfile.writeFile(filePath, obj, function(err, obj) {
            if (err) console.error(err)
            res.status(200).send("ok");
        })
		}
		 else {
		res.status(500).send("have missing  or additional keys");
	 }
    })
});


/* Delete user  */
router.delete('/:id', function(req, res) {
    jsonfile.readFile(filePath, function (err, obj) {
        if(err) {
			return res.status(500).send("There was an error reading the file!");
		}
        delete obj.users[req.params.id];
        jsonfile.writeFile(filePath, obj, function(err, obj) {
            if (err) console.error(err)
            res.status(200).send("ok");
        })
    })
});

module.exports = router;