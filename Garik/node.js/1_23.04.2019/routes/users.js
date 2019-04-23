var express = require('express');
var router = express.Router();
var users = './PROJECT_PATH/data/users.json';
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
            case "name":
                count++;
                break;
            case "surname":
                count++;
                break;
            case "age":
                count++;
                break;
            case "gender":
                break;
            case "email":
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
//1. Create new user - name, surname, age, gender, email
//4.1 post
//4.1.1 body - ""
//4.1.2 body - not json
//4.1.3 body - {}, missing keys, additional keys ...
//4.1.4 - server error (file is missing, network issue, permission missing)
router.post('/', function(req, res) {
    let testObj = testRequest(req);
    if(testObj){
        return res.status(testObj.statusCode).send(testObj.statusMessage);
    }
    jsonfile.readFile(users, 'utf-8', function(err, obj){ 
        if(err){
            res.status(500).send(`Server error`);
        }else{
            obj.users[uniqid()] = req.body
            jsonfile.writeFile(users, obj, {spaces : 4, EOL : '\r\n'}, function(err, obj){
                if(err){
                    return res.status(500).send(`Server error`);
                }
                 res.status(200).send("OK");
            })
        }
    })
});

//3. Get all users - name, surname, age
//4.3 get all
//4.3.1 - server error (file is missing, network issue, permission missing)
router.get('/', function(req, res) {
    jsonfile.readFile(users, 'utf-8', function(err, obj){ 
        if(err){
            res.status(500).send(`Server error`);
        }else{
            res.status(200).send(Object.keys(obj.users).map(item =>{
                return {"name" : obj.users[item].name, "surname" : obj.users[item].surname, "age" : obj.users[item].age}
            }))
        }
    });
});
//
testRequestId = (req ) => {
    let statusCode,
        statusMessage;
    if(req.params.id === undefined){//es error@ chem stanum
        statusCode = 400;
        statusMessage = `id - not provided`;
        return {statusCode, statusMessage}
    }
    // id - is string ("sdgjg")
}
//2. Update user - id, name, surname, age, gender, email
//4.2 put
//4.2.1-3 - 4.1.1-3 post
//4.2.4 id - not provided
//4.2.5 id - is not correct (no match found)
//4.2.6 id - is string ("sdgjg")
//4.2.7 - server error (file is missing, network issue, permission missing)
router.put('/:id', function(req, res){
    let testObj = testRequest(req);
    let testObjId = testRequestId(req);
    if(testObj){
        return res.status(testObj.statusCode).send(testObj.statusMessage);
    }
    if(testObjId){
        return res.status(testObjId.statusCode).send(testObjId.statusMessage);
    }
    jsonfile.readFile(users, 'utf-8', function(err, obj){ 
        if(err){
            return res.status(500).send(`${err}Server error`);
        }
        if(obj["users"][req.params.id]){
            obj["users"][req.params.id] = req.body;
            jsonfile.writeFile(users, obj, {spaces : 4, EOL : '\r\n'}, function(err, obj){
                if(err){
                    return res.status(500).send(`Server error`);
                }
                 res.status(200).send("OK");
            })
        }else{
            res.status(404).send(`Record Not Found : id - is not correct (no match found)`);
        }
    });
})
//4. Get specific user details - name, surname, age, gender, email (id request param)
//4.4 get user details
//4.4.1-4 - 4.2.4 - 4.2.7
router.get('/:id', function(req, res){
    let testObjId = testRequestId(req);
    if(testObjId){
        return res.status(testObjId.statusCode).send(testObjId.statusMessage);
    }
    jsonfile.readFile(users, "utf-8", function(err,obj){
        if(err){
            return res.status(500).send(`${err}Server error`);
        }
        if(obj["users"][req.params.id]){
            res.status(200).send(obj["users"][req.params.id]);
        }else{
            res.status(404).send(`Record Not Found : id - is not correct (no match found)`);
        }
    })
})
//5. Delete user - id (request param)
//4.5 delete user
//4.5.1-4 - 4.2.4 - 4.2.7
router.delete('/:id', function(req, res){
    let testObjId = testRequestId(req);
    if(testObjId){
        return res.status(testObjId.statusCode).send(testObjId.statusMessage);
    }
    jsonfile.readFile(users, "utf-8", function(err,obj){
        if(err){
            return res.status(500).send(`${err}Server error`);
        }
        if(obj["users"][req.params.id]){
            delete obj["users"][req.params.id];
            jsonfile.writeFile(users, obj, {spaces : 4, EOL : '\r\n'}, function(err, obj){
                if(err){
                    return res.status(500).send(`Server error`);
                }
                 res.status(200).send("OK");
            })
        }else{
            res.status(404).send(`No Content : id - is not correct`);
        }
    })
})
module.exports = router;