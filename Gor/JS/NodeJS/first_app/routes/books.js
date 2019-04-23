var express = require('express');
var jsonfile = require('jsonfile');
var uniqid = require('uniqid');
var router = express.Router();
const filePath = './data/books.json';

router.get('/', function(req, res) {
    jsonfile.readFile(filePath, function(err, obj) {
        if(err) {
            return res.status(500).send("Server error");
        }
        const books = {};
        for(item in obj.books) {
            books[item] = {
                "bookName": obj.books[item].bookName,
                "author": obj.books[item].author,
                "count": obj.books[item].count
            };
        }
        return res.status(200).send(books);
    })
});

router.get('/:id', function(req, res) {
    jsonfile.readFile(filePath, function(err, obj) {
        if(err) {
            return res.status(500).send("Server error");
        }
        const bookID = req.params.id;
        if(!obj.books[bookID]) {
            return res.status(404).send("Book not found");
        }
        return res.status(200).send(obj.books[bookID]);
    })
});

router.post('/', function(req, res) {
    jsonfile.readFile(filePath, function (err, obj) {
        if(err) {
			return res.status(500).send("External server error");
		}
        if(req.headers['content-type'] !== 'application/json') {
            return res.status(400).send("Bad request: Body is not JSON");            
        }        
        if(Object.keys(req.body).length === 0) {
            return res.status(400).send("Bad request: Body is empty");
        }
        if(req.body.title === "" || req.body.author === "" || req.body.pages === "") {
            return res.status(400).send("Bad request: Missing or additional keys.");
        }
        const key = uniqid();
        obj.books[key] = {
            id: key,
            title: req.body.title,
            author: req.body.author,
            pages: req.body.pages,
            country: req.body.country,
            language: req.body.language,
            link: req.body.link,
            published: req.body.published
            
        }
        jsonfile.writeFile(filePath, obj, function(err, obj) {
            if(err) {
                return res.status(500).send("External server error");
            }
            res.status(200).send("ok");
        })
    })
});

router.delete('/:id', function(req, res) {
    jsonfile.readFile(filePath, function (err, obj) {
        if(err) {
			return res.status(500).send("External server error");
		}
        const bookID = req.params.id;
        if(!obj.books[bookID]) {
            return res.status(404).send("Book not found");
        }
        delete obj.books[bookID];
        jsonfile.writeFile(filePath, obj, function(err, obj) {
            if(err) {
                return res.status(500).send("External server error");
            }
            res.status(204).send("Delete complate");
        })
    })
});

router.put('/:id', function(req, res) {
    jsonfile.readFile(filePath, function (err, obj) {
        if(err) {
			return res.status(500).send("External server error");
		}
        if(req.headers['content-type'] !== 'application/json') {
            return res.status(400).send("Bad request: Body is not JSON");            
        }        
        if(Object.keys(req.body).length === 0) {
            return res.status(400).send("Bad request: Body is empty");
        }
        if(req.body.title === "" || req.body.author === "" || req.body.pages === "") {
            return res.status(400).send("Bad request: Missing or additional keys.");
        }
        const bookID = req.params.id;
        if(!obj.books[bookID]) {
            return res.status(404).send("Data not found");
        }
        const keys = Object.keys(req.body);
        keys.forEach(function(item){
            if(obj.books[bookID][item] && req.body[item] !== "") {
                obj.books[bookID][item] = req.body[item];
            }
        });
        jsonfile.writeFile(filePath, obj, function(err, obj) {
            if(err) {
                return res.status(500).send("External server error");
            }
            res.status(200).send("ok");
        })
    })
});

module.exports = router;