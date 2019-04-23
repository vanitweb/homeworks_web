var express = require('express');
var router = express();
var fs = require('fs');
let dataUsers = require('../data/users.json');

router.get('/', (req, res) => {
	 res.send("HELLO USERS!");
});


//ստանում ենք բոլոր user-ները
router.get('/users', (req, res) => {
    fs.readFile("./data/users.json", "utf-8", function (err, data) {
        if(err) {
			return res.status(500).send("EXTERNAL SERVER ERROR");
		}
        const users = {};
        for(item in dataUsers) {
            users[item] = {"name":dataUsers[item].name, "surname": dataUsers[item].surname, "age": dataUsers[item].age}
        }
        res.status(200).send(users);
		console.log(dataUsers);
    })

});

//ստանում ենք 1 user իր id-ով
router.get('/users/:id', (req, res) => {
	fs.readFile("./data/users.json", "utf-8",  (err, data) => {
		if(err) {
			return res.status(500).send("EXTERNAL SERVER ERROR");
		}
		const id = req.params.id;
		if(!dataUsers[id]) {
			return res.status(404).send("Data not found");
		}
        res.status(200).send(dataUsers[id]);
	})
});



//ստեղծում ենք նոր user
router.post('/users', (req, res) => {
	fs.readFile("./data/users.json", "utf-8",  (err, data)=> {
		if(err) {
			return res.status(500).send("EXTERNAL SERVER ERROR");
		}
        if(!req.body || req.body.name === "" || req.body.surname === "" || req.body.email === "" ) {
            return res.status(400).send("BAD RAQUEST");
        }
		
        const id = Date.now();
        dataUsers[id] = {
            id: id,
            name: req.body.name,
            surname: req.body.surname,
            age: req.body.age,
            gender: req.body.gender,
            email: req.body.email
        }
		
        fs.writeFile("./data/users.json", JSON.stringify(dataUsers,  null, 2), (err, data) => {
            if(err) {
                return res.status(500).send("EXTERNAL SERVER ERROR");
            }
            res.status(200).send("OK");
			console.log(dataUsers);
        })
	})
})

//թարմացնել user-ը
router.put('/users/:id', (req, res) => {
    fs.readFile("./data/users.json", (err, data) => {
        if(err) {
			return res.status(500).send("EXTERNAL SERVER ERROR");
		}
        if(!req.body || req.body.name === "" || req.body.surname === "" || req.body.email === "") {
            return res.status(400).send("BAD RAQUEST");
        }
        const id = req.params.id;
        if(!dataUsers[id]) {
            return res.status(404).send("DATA NOT FOUND");
        }
        dataUsers[id].name = req.body.name;
        dataUsers[id].surname = req.body.surname;
        dataUsers[id].age = req.body.age;
        dataUsers[id].gender = req.body.gender;
        dataUsers[id].email = req.body.email;
        fs.writeFile("./data/users.json", JSON.stringify(dataUsers,  null, 2), (err, data) => {
            if(err) {
                return res.status(500).send("EXTERNAL SERVER ERROR");
            }
            res.status(200).send("OK");
        })
    })
});


//հեռացնել user-ը
router.delete('/users/:id', (req, res) => {
    fs.readFile("./data/users.json", (err, data) => {
        if(err) {
			return res.status(500).send("EXTERNAL SERVER ERROR");
		}
        const id = req.params.id;
        if(!dataUsers[id]) {
            return res.status(400).send("BAD RAQUEST");
        }
        delete dataUsers[id];
        fs.writeFile("./data/users.json", JSON.stringify(dataUsers,  null, 2), function(err, obj) {
            if(err) {
                return res.status(500).send("EXTERNAL SERVER ERROR");
            }
        res.status(204).send("NO CONTENT");
        })
    })
});

module.exports = router;
