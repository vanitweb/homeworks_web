var express = require('express');
var router = express.Router();
var allUsers = "./PROJECT_PATH/data/allUsers.json";
const jsonfile = require('jsonfile');
const fs = require('fs');






/* GET all books */

router.get('/', function(req, res, next) {
	jsonfile.readFile(allUsers, "utf-8", function (err, data) {
		if (err){
			res.status(500).send(`server error`);
		}
		const books = [];
		for(let isbn in data){
			books.push({"title" : data[isbn].title, "subtitle" : data[isbn].subtitle, "author" : data[isbn].author});
		}
		res.status(200).send(books);
	});
});

/* ADD new book */

router.post('/', function(req, res, next) {
	//console.log(req.headers[`content-type`]);// === application/json
	jsonfile.readFile(allUsers, "utf-8", function (err, data) {
		if (err) {
			res.status(500).send("server error");
		}
		const newBook = {};
		if (req.headers[`content-type`] === "application/json" && req.body) {
			if (req.body.isbn && req.body.title && req.body.author && req.body.website) {
				for(let key in req.body){
					switch (key) {
						case "isbn":
							newBook[key] = req.body[key]
							break;
						case "title":
							newBook[key] = req.body[key]
							break;
						case "author":
							newBook[key] = req.body[key]
							break;
						case "website":
							newBook[key] = req.body[key]
							break;
						case "subtitle":
							newBook[key] = req.body[key]
							break;
						case "published":
							newBook.published = req.body[key]
							break;
						case "publisher":
							newBook[key] = req.body[key]
							break;
						case "pages":
							newBook[key] = req.body[key]
							break;
						case "description":
							newBook[key] = req.body[key]
							break;
						default:
							res.status(400).send("bad request");
							return
					}
				}
			}else {
				res.status(400).send("bad request");
			}
		}else{
			res.status(400).send("bad request");
		}
		data[newBook.isbn] = newBook;
		jsonfile.writeFile(allUsers, data, { spaces: 2, EOL: '\r\n' }, function (err) {
			if (err) {
				res.status(500).send("server error");
			}
			res.status(200).send("success");
		});

	});
});

/* CHANGE book info */

router.put('/:id', function(req, res, next) {
	//console.log(req.headers[`content-type`]);// === application/json
	jsonfile.readFile(allUsers, "utf-8", function (err, data) {
		if (err) {
			res.status(500).send("server error");
		}
		const newBook = data[req.params.id];
		if (req.headers[`content-type`] === "application/json" && req.body) {
			for(let key in req.body){
				switch (key) {
					case "isbn":
						newBook[key] = req.body[key]
						break;
					case "title":
						newBook[key] = req.body[key]
						break;
					case "author":
						newBook[key] = req.body[key]
						break;
					case "website":
						newBook[key] = req.body[key]
						break;
					case "subtitle":
						newBook[key] = req.body[key]
						break;
					case "published":
						newBook.published = req.body[key]
						break;
					case "publisher":
						newBook[key] = req.body[key]
						break;
					case "pages":
						newBook[key] = req.body[key]
						break;
					case "description":
						newBook[key] = req.body[key]
						break;
					default:
						res.status(400).send("bad request");
						return
				}
			}
		}else{
			res.status(400).send("bad request");
		}
		data[newBook.isbn] = newBook;
		jsonfile.writeFile(allUsers, data, { spaces: 2, EOL: '\r\n' }, function (err) {
			if (err) {
				res.status(500).send("server error");
			}
			res.status(200).send("success");
		});
	});
});

/* GET one book   id => (isbn) */

router.get('/:id', function(req, res, next) {
	jsonfile.readFile(allUsers, "utf-8", function (err, data) {
		if (err){
			res.status(500).send("server error");
		}
		if (data[req.params.id]) {
			res.status(200).send(data[req.params.id]);
		}else{
			res.status(404).send("not found");
		}
	});
});

/* delete book */

router.delete('/:id',function(req,res){
    jsonfile.readFile(allUsers, "utf-8", function (err, data) {
		if (err){
			res.status(500).send("server error");
		}
		if (data[req.params.id]) {
			delete data[req.params.id]
		}else{
			res.status(404).send("not found");
		}
		jsonfile.writeFile(allUsers, data, { spaces: 2, EOL: '\r\n' }, function (err) {
			if (err) {
				res.status(500).send("server error");
			}
			res.status(204).send("deleted");
		});
	});
});

module.exports = router;
