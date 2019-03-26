var express = require('express');
var router = express.Router();
var allUsers = require('./../PROJECT_PATH/data/allUsers.json');
// const fs = require('fs');



/* GET users listing. */
router.get('/', function(req, res, next) {
	let users = [];
	allUsers["users"].forEach(item =>{
		users.push({"name" : item.name, "surname" : item.surname, "age" : item.age})
	})
  	res.send(users);
});

router.post('/', function(req, res) {
	const user = req.body;
	user.id = allUsers["users"][allUsers["users"].length - 1].id + 1;
	allUsers["users"].push(user)
	res.send(user)
  
});

router.get('/:id', function(req, res, next) {
	allUsers["users"].forEach(item => {
		if(item.id === req.params.id*1){
			res.send(item);
		}else{
			return
		}
	})
	res.send("cheeeeeeee");
});

router.put('/:id', function(req, res) {
	allUsers["users"].forEach((item, index) => {
		if(item.id === req.params.id*1){
			const user = req.body;
			user.id = index;
			allUsers["users"][index] = user;
			res.send(allUsers["users"][index]);
		}else{
			return
		}
	})
	res.send("cheeeeeeee");
  
});

router.delete('/:id',function(req,res){
    allUsers["users"].forEach((item, index) => {
		if(item.id === req.params.id*1){
			allUsers["users"].splice(index, 1);
			res.send("deleted");
		}else{
			return
		}
	})
	res.send("cheeeeeeee");
});

module.exports = router;




// fs.readFile('./routes/allUsers.json', 'utf-8', function(err, data) {
//   if (err) throw err

//   var arrayOfObjects = JSON.parse(data)
//   arrayOfObjects.users.push({
//     name: "Mikhail",
//     age: 24
//   })

//   console.log(arrayOfObjects)

//   fs.writeFile('./routes/allUsers.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
//     if (err) throw err
//     console.log('Done!')
//   })
// })




// fs.writeFile("./test.txt", "Hey there!", function(err) {
//     if(err) {
//         return console.log(err);
//     }else{
//     	console.log("The file was saved!")
//     	console.log(err)
//     }

    
// });


// fs.rename('./file.txt', './gggg.txt', (err)=>{
//  if(err){
//  console.error(err.message);
//  }
// });


// router.post('/', function(req, res, next) {
// 	fs.readFile('./routes/allUsers.json', 'utf-8', function(err, data) {
//   if (err) throw err

//   var arrayOfObjects = JSON.parse(data)
//   arrayOfObjects.users.push({
//     name: "Mikhail",
//     age: 24
//   })

//   console.log(arrayOfObjects)

//   fs.writeFile('./routes/allUsers.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
//     if (err) throw err
//     console.log('Done!')
//   })
// })

//   res.send(allUsers);
// });
