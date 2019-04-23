var express = require('express');
var router = express.Router();
var jsonData = require('../data/users.json')
var bodyParser = require('body-parser')
const jsonfile = require('jsonfile');
const file = './data/users.json';


router.use( bodyParser.json() );
router.use( bodyParser.urlencoded({extended:true}) );


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'First app in Express' });
});

router.get('/allusers', function(req, res, next) {
    res.send(jsonData);
});

/* GET users by ID. */
router.get('/allusers/:id', function(req, res, next) {
	let message = "We don't have a user with that ID yet";
	let message2 = "Please input valid ID (ID most by a Number)";
     let regex = new RegExp("^[0-9]+$");
	let check = regex.test(req.params.id)
 	if(!(check)){
 		let err = new Error(message2);
 	}
      jsonfile.readFile(file, function (err, arr) {
      	let size = Object.keys(jsonData.users).length;
      	 const count = Number(req.params.id);
      	 console.log(size);
      	 if (count > size) {
      	 res.status(204).send(message);
 		  next(err2);

      	 	/*console.log(message);
 		res.status(204).send(message);*/
 	}else{
 		res.status(200).send("ok");
 	} 	
    })
});

/* Create new User  DONE*/
router.post('/allusers/:addUser', function(req, res, next) {
    let size = Object.keys(jsonData.users).length + 1;

    console.log(size);
    var newUser = {
        id: size
    };
    jsonfile.readFile(file, function(err, obj) {
        for (const key in req.body) {
            newUser[key] = req.body[key];
        }
          jsonData.users[size] = newUser;
          obj.users[size] = newUser;
        jsonfile.writeFile(file, obj, function(err, obj) {
            if (err) console.error(err)
            res.status(200).send(jsonData.users);
        })
    })
    
})

/* Delete User Done*/
router.delete('/allusers/:id', function(req, res, next) {
jsonfile.readFile(file, function (err, obj) {
        if(err) {
      return res.status(500).send("Internal Server Error");
    }
        const myID = req.params.id;
        if(!(obj.allusers.hasOwnProperty(myID))) {
            return res.status(400).send(" id - is not correct ");
        }
        delete obj.allusers[myID];
        jsonfile.writeFile(file, obj, function(err, obj) {
            if(err) {
                return res.status(500).send("Internal Server Error");
            }
        res.status(204).send("No Content");
        })
    })
	
})


module.exports = router;
