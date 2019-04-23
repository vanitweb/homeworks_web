var express = require('express');
var router = express.Router();
const jsonfile = require('jsonfile');
const filePathBooks = './data/books.json';

/* GET books all */
router.get('/', function(req, res) {
    jsonfile.readFile(filePathBooks, function (err, obj) {
        if(err) {
			return res.status(500).send("1External server error");
		}
		const books = {};
        for(item in obj.books) {
            books[item] = {"author":obj.books[item].author, "title": obj.books[item].title, "content": obj.books[item].content}
        }
       // for (var key in books)
        //if (books.hasOwnProperty(key)) {
			res.status(200).send(books);
		//}
        //return res.status(500).send("data is empty");
		
    })
});

/* GET user by ID. */
router.get('/:id', function(req, res) {
    jsonfile.readFile(filePathBooks, function (err, obj) {
        if(err) {
			return res.status(500).send("2External server error");
		}
		const bookID = req.params.id;
		if(!(obj.books[bookID])) {
			return res.status(404).send("Data not found");
		}
        res.status(200).send(obj.books[bookID]);
    })
});


/* add new user. */
router.post('/', function(req, res) {
    jsonfile.readFile(filePathBooks, function (err, obj) {
        if(err) {
			return res.status(500).send("There was an error reading the file!");
		}
		if(!req.body || req.body.author === "" || req.body.title === "" || req.body.content === "") {
            return res.status(400).send("Bad request");
        }
        const key = Date.now();
        obj.books[key] = {
            id: key,
            author: req.body.author,
            title: req.body.title,
            content: req.body.content
        }
	     jsonfile.writeFile(filePathBooks, obj, function(err, obj) {
            if(err) {
                return res.status(500).send("3External server error");
            }
            res.status(200).send("ok");
        })
	
    })
});



/* Change user data. */
router.put('/:id', function(req, res) {
    jsonfile.readFile(filePathBooks, function (err, obj) {
        if(err) {
			return res.status(500).send("External server error");
		}
        if(!req.body || req.body.author === "" || req.body.title === "" || req.body.content === "") {
            return res.status(400).send("Bad request");
        }
        const key = req.params.id;
        if(!obj.books[key]) {
            return res.status(404).send("Data not found");
        }
        obj.books[key].author = req.body.author;
        obj.books[key].title = req.body.title;
        obj.books[key].content = req.body.content;
        jsonfile.writeFile(filePathBooks, obj, function(err, obj) {
            if(err) {
                return res.status(500).send("External server error");
            }
            res.status(200).send("ok");
        })
    })
});


/* Delete user  */
router.delete('/:id', function(req, res) {
    jsonfile.readFile(filePathBooks, function (err, obj) {
        if(err) {
			return res.status(500).send("External server error");
		}
        const bookID = req.params.id;
        if(!obj.books[bookID]) {
            return res.status(400).send("Bad request");
        }
        delete obj.books[bookID];
        jsonfile.writeFile(filePathBooks, obj, function(err, obj) {
            if(err) {
                return res.status(500).send("External server error");
            }
        res.status(204).send("No Content");
        })
    })
});
module.exports = router;