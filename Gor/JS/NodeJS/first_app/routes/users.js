var express = require('express');
var router = express.Router();
const jsonfile = require('jsonfile');
const file = './data/users.json';

/* GET users listing. */
router.get('/', function(req, res) {
    jsonfile.readFile(file, function (err, obj) {
        if (err) console.error(err)
        const users = {};
        for(item in obj.users) {
            users[item] = {"name":obj.users[item].name, "surname": obj.users[item].surname, "age": obj.users[item].age}
        }
        res.status(200).send(users);
    })
});

/* GET user by ID. */
router.get('/:id', function(req, res) {
    jsonfile.readFile(file, function (err, obj) {
        if (err) console.error(err)
        res.status(200).send(obj.users[req.params.id]);
    })
});

/* Add a new user. */
router.post('/', function(req, res) {
    jsonfile.readFile(file, function (err, obj) {
        if (err) console.error(err)
        const key = (new Date()).getTime();
        obj.users[key] = {
            id: key,
            name: req.body.name,
            surname: req.body.surname,
            age: req.body.age,
            gender: req.body.gender,
            email: req.body.email
        }
        jsonfile.writeFile(file, obj, function(err, obj) {
            if (err) console.error(err)
            res.status(200).send("ok");
        })
    })
});

/* Delete user data. */
router.delete('/:id', function(req, res) {
    jsonfile.readFile(file, function (err, obj) {
        if (err) console.error(err)
        delete obj.users[req.params.id];
        jsonfile.writeFile(file, obj, function(err, obj) {
            if (err) console.error(err)
            res.status(200).send("ok");
        })
    })
});

/* Change user data. */
router.put('/:id', function(req, res) {
    jsonfile.readFile(file, function (err, obj) {
        if (err) console.error(err)
        const key = req.params.id;
        obj.users[key] = {
            id: key,
            name: req.body.name,
            surname: req.body.surname,
            age: req.body.age,
            gender: req.body.gender,
            email: req.body.email
        }
        jsonfile.writeFile(file, obj, function(err, obj) {
            if (err) console.error(err)
            res.status(200).send("ok");
        })
    })
});

module.exports = router;