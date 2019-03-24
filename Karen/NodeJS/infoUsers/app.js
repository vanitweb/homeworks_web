var createError = require('http-errors');
var express = require('express');
var path = require('path');


var bodyParser = require("body-parser");
var fs = require("fs");

var app = express();
var jsonParser = bodyParser.json();
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.get("/usersInfo", function(req, res){
    var content = fs.readFileSync("dataUser.json", "utf8");
    var users = JSON.parse(content);
    for(var i = 0; i < users.length; i++){
    	delete users[i].id;
    	delete users[i].email;
    	delete users[i].gender;
    }
    res.send(users);
});

app.post("/usersInfo", function (req, res) {
    var data = fs.readFileSync("dataUser.json", "utf8");
    var users = JSON.parse(data);
    var user = {name: req.body.name,
    	surname: req.body.surname,
    	age: req.body.age,
    	email: req.body.email,
    	gender: req.body.gender
    }
    user.id = users.length;
    users.push(user);
    var data = JSON.stringify(users);
    fs.writeFileSync("dataUser.json", data);
    res.send(user);
});

app.delete("/usersInfo/:id", function(req, res){
      
    var id = req.params.id;
    var data = fs.readFileSync("dataUser.json", "utf8");
    var users = JSON.parse(data);
    var index = -1;
    for(var i = 0; i < users.length; i++){
        if(users[i].id == id){
            index = i;
            break;
        }
    }
    if(index > -1){
        var user = users.splice(index, 1);
        for(var t = 0; t < users.length; t++){
        	users[t].id = t;
        }
        var data = JSON.stringify(users);
        fs.writeFileSync("dataUser.json", data);
        res.send(user);
    }
    else{
        res.status(404).send();
    }
});

app.get("/usersInfo/:id", function(req, res){
	var id = req.params.id;
	var data = fs.readFileSync("dataUser.json", "utf8");
    var users = JSON.parse(data);
    for(var i = 0; i < users.length; i++){
        if(users[i].id == id){
        	res.send(users[i]);
        }
    }
    res.status(404).send();
});

app.put("/usersInfo", function(req, res){
     
    var user = {
    	id: req.body.id,
    	name: req.body.name,
    	surname: req.body.surname,
    	age: req.body.name,
    	email: req.body.email,
    	gender: req.body.gender
    };
     
    var data = fs.readFileSync("dataUser.json", "utf8");
    var users = JSON.parse(data);
    for(var i = 0; i < users.length; i++){
        if(users[i].id == user.id){
            users[i].name = user.name;
            users[i].surname = user.surname;
            users[i].age = user.age;
            users[i].email = user.email;
            users[i].gender = user.gender;
            var data = JSON.stringify(users);
        	fs.writeFileSync("dataUser.json", data);
        	res.send(user);
        }
    };
    res.status(404).send(user);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
