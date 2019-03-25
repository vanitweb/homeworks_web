const createError = require('http-errors');
const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');
const cookieParser = require('cookie-parser');

const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

let users = require('./data/users.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (req, res) => {
	res.send('Hello, Express!');
});
 app.get('/users', (req, res) => {
	 res.send(users);
 });
app.get('/users/:id', (req, res) => {
	console.log(req.params);
	const user = users.find(function(user){
		return user.id === Number(req.params.id);
	});
	res.send(user);
});
app.post('/users', (req, res) => {
	let user = {
		id: Date.now(),
		name: req.body.name,
		surname: req.body.surname,
		age: req.body.age,
		gender: req.body.gender,
		email: req.body.email
	};
	users.push(user);
	res.send(user);
});
app.put('/users/:id', (req, res) => {
	const user = users.find(function(user){
		return user.id === Number(req.params.id);
	});
	user.name = req.body.name;
	user.surname = req.body.surname;
	user.age = req.body.age;
	user.gender = req.body.gender;
	user.email = req.body.email;
	res.sendStatus(200);
	console.log(req.body);
});
app.delete('/users/:id', (req, res) => {
	users = users.filter(function(user) {
		return user.id !== Number(req.params.id);
	});
	res.sendStatus(200);
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
