var express = require('express');
var router = express.Router();
var books = './PROJECT_PATH/data/books.json';
const jsonfile = require('jsonfile');
let uniqid = require('uniqid');

testRequest = (req) => {
    let count = 0,
        statusCode,
        statusMessage;
    if(req.headers["content-type"] !== "application/json"){
        statusCode = 400;
        statusMessage = `Bad Request : Body not json`;
        return {statusCode, statusMessage};
    }else if(Object.keys(req.body).length === 0){
        statusCode = 400;
        statusMessage = `Bad Request : Body is empty`;
        return {statusCode, statusMessage};
    }
    const bodyKeys = Object.keys(req.body);
    for(let key of bodyKeys){
        switch(key){
            case "author":
                count++;
                break;
            case "language":
                count++;
                break;
            case "title":
                count++;
                break;
            case "imageLink":
                break;
            case "country":
                break;
            case "link":
                break;
            case "pages":
                break;
            case "year":
                break;
            default:
                statusCode = 400;
                statusMessage = `Bad Request : Missing keys, additional keys`;
                return {statusCode, statusMessage};
        }
    }
    if(count !== 3){
        statusCode = 400;
        statusMessage = `Bad Request : Missing keys, additional keys`;
        return {statusCode, statusMessage};
    }
}
//1. Create new book - required(author, language, title), imageLink, language, link, pages, year
//4.1 post
router.post('/', function(req, res) {
    let testObj = testRequest(req);
    if(testObj){
        res.status(testObj.statusCode).send(testObj.statusMessage);
        return;
    }
    jsonfile.readFile(books, 'utf-8', function(err, obj){ 
        if(err){
            res.status(500).send(`Server error`);
        }else{
            obj.books[uniqid()] = req.body
            jsonfile.writeFile(books, obj, {spaces : 4, EOL : '\r\n'}, function(err, obj){
                if(err){
                    return res.status(500).send(`Server error`);
                }
                 res.status(200).send("OK");
            })
        }
    })
});

//2. Get all books - author, language, title
router.get('/', function(req, res) {
    jsonfile.readFile(books, 'utf-8', function(err, obj){ 
        if(err){
            res.status(500).send(`Server error`);
        }else{
            res.status(200).send(Object.keys(obj.books).map(item =>{
                return {"author" : obj.books[item].author, "language" : obj.books[item].language, "title" : obj.books[item].title}
            }))
        }
    });
});
//
testRequestId = (req ) => {
    let statusCode,
        statusMessage;
    if(req.params.id === undefined){
        statusCode = 400;
        statusMessage = `id - not provided`;
        return {statusCode, statusMessage}
    }
}
//2. Update book - author, language, title, imageLink, language, link, pages, year
router.put('/:id', function(req, res){
    let testObj = testRequest(req);
    let testObjId = testRequestId(req);
    if(testObj){
        return res.status(testObj.statusCode).send(testObj.statusMessage);
    }
    if(testObjId){
        return res.status(testObjId.statusCode).send(testObjId.statusMessage);
    }
    jsonfile.readFile(books, 'utf-8', function(err, obj){ 
        if(err){
            return res.status(500).send(`Server error`);
        }
        if(obj["books"][req.params.id]){
            obj["books"][req.params.id] = req.body;
            jsonfile.writeFile(books, obj, {spaces : 4, EOL : '\r\n'}, function(err, obj){
                if(err){
                    return res.status(500).send(`Server error`);
                }
                res.status(200).send("Ok");   
            })
        }else{
            res.status(404).send(`Record Not Found : id - is not correct (no match found)`);
        }
    });
})
//4. Get specific books details - author, language, title, imageLink, language, link, pages, year
router.get('/:id', function(req, res){
    let testObjId = testRequestId(req);
    if(testObjId){
        return res.status(testObjId.statusCode).send(testObjId.statusMessage);
    }
    jsonfile.readFile(books, "utf-8", function(err,obj){
        if(err){
            return res.status(500).send(`Server error`);
        }
        if(obj["books"][req.params.id]){
            res.status(200).send(obj["books"][req.params.id]);
        }else{
            res.status(404).send(`Record Not Found : id - is not correct (no match found)`);
        }
    })
})
//5. Delete book - id (request param)
router.delete('/:id', function(req, res){
    let testObjId = testRequestId(req);
    if(testObjId){
        return res.status(testObjId.statusCode).send(testObjId.statusMessage);
    }
    jsonfile.readFile(books, "utf-8", function(err,obj){
        if(err){
            return res.status(500).send(`Server error`);
        }
        if(obj["books"][req.params.id]){
            delete obj["books"][req.params.id];
            jsonfile.writeFile(books, obj, {spaces : 4, EOL : '\r\n'}, function(err, obj){
                if(err){
                    return res.status(500).send(`Server error`);
                }
                res.status(200).send("OK");
            });   
        }else{
            res.status(404).send(`No Content : id - is not correct`);
        }
    })
})
module.exports = router;
