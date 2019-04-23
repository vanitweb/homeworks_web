var express = require('express');
var router = express.Router();
var fs = require("fs");
var uniqid = require('uniqid');


router.get("/", function(req, res){
    fs.readFile("./data/dataUser.json", "utf8", function(err, data) {
    	if(err) {return res.status(500).send("Internal Server Error")};
    	const users = JSON.parse(data);
    	const userInfo = {};
    	for(let id in users){
    		userInfo[id] = {"name": users[id].name, "surname": users[id].surname, "age": users[id].age}
    	}
    	res.send(userInfo);
    })
});

router.get("/:id", function(req, res){
	fs.readFile("./data/dataUser.json", "utf8", function(err, data) {
    	if(err) {return res.status(500).send("Internal Server Error")};
    	const id = req.params.id;
    	const users = JSON.parse(data);
    	if(!id) {return res.status(404).send("Record Not Found")};
		if(!users[id]) {return res.status(204).send("No Content")};
		const user = users[id];
		delete user['id'];
		res.send(user);
    })
});

router.delete("/:id", function(req, res){
	fs.readFile("./data/dataUser.json", "utf8", function(err, users) {
		if(err) {return res.status(500).send("Internal Server Error")};
		const id = req.params.id;
		const data = JSON.parse(users);
		if(!id) {return res.status(404).send("Record Not Found")};
		if(!data[id]) {return res.status(204).send("No Content")};
		const user = data[id];
		delete data[id];
		fs.writeFile("./data/dataUser.json", JSON.stringify(data), function(err){
			if(err) {return res.status(500).send("Internal Server Error")};
			res.send(user);
		})
	})

});

router.put("/", function(req, res) {
	fs.readFile("./data/dataUser.json", "utf8", function(err, users) {
		if(err) {return res.status(500).send("Internal Server Error")};
		if(!req.body) {return res.status(404).send("Record Not Found")};
		const user = {
    		id: req.body.id,
    		name: req.body.name,
    		surname: req.body.surname,
    		age: req.body.age,
    		email: req.body.email,
    		gender: req.body.gender
    	};
    	const data = JSON.parse(users);
    	if(!data[user.id]) {return res.status(204).send("No Content")};
    	data[user.id] = user;
    	fs.writeFile("./data/dataUser.json", JSON.stringify(data), function(err) {
    		if(err) {return res.status(500).send("Internal Server Error")};
    		res.send(user);
    	});
    	
	})
});

router.post("/", function(req, res) {
	fs.readFile("./data/dataUser.json", "utf8", function(err, users) {
		if(err) {return res.status(500).send("Internal Server Error")};
		if(!req.body) {return res.status(404).send("Record Not Found")};
		
    	const data = JSON.parse(users);
    	const iqid = uniqid.process();
		const user ={
			name: req.body.name,
		    surname: req.body.surname,
		    age: req.body.age,
		    email: req.body.email,
		    gender: req.body.gender,
		};
		const use = {};
		use[iqid] = user;
		use[iqid].id = iqid;
		const data1 = Object.assign(data, use);
		fs.writeFile("./data/dataUser.json", JSON.stringify(data1), function(err) {
    		if(err) {return res.status(500).send("Internal Server Error")};
    		res.send(user);
    	});
	})
});


module.exports = router;
