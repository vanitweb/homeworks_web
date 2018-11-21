//ashxatanqayin tvyalner, ashxatakci anun-azganun

let myMap = new Map();

let person = [{name: "Marine", surname: "Alaverdyan", age: 22},
	{name: "Any", surname: "Poghosyan", age: 20},
	{name: "Ella", surname: "Mesropyan", age: 18}];
let personJob = [{jobtitle: "cook", salary: 1000}, 
	{jobtitle: "teacher", salary: 1500}];
myMap.set(person[2], personJob[0]);
myMap.set(person[1], personJob[1]);
function isEmployed(person){
     if(myMap.has(person)){
		console.log(myMap.get(person));
	}else{
		console.log("chi ashxatum");
	}
}
isEmployed(person[1]);



// 1. Գրել ծրագիր, որը կօգնի հասկանալ, թե որ նամակներն են 
//արդեն կարդացած։ // ուրաքանչյուր նամակ ունի տեքստ և թե ում
// կողմից է ուղարկված։
	// is_message_read({text: “hello”, from: “ananymous”}) => 
	// true/false
let letters = [{text: 'Hello', from: 'Any'},
	{text: 'Thank you', from: 'Alla'},
	{text: 'By', from: 'Any'}];
let read = new Set();
read.add(letters[0]);
read.add(letters[1]);
function redNored(letters) {
	return read.has(letters);
}
console.log(redNored(letters[0]));

// 2.Գրել ծրագիր, որը կօգնի հասկանալ, թե որ նամակներն են 
// արդեն կարդացած և երբ(առաջին անգամ) և ում կողմից են նրանք 
// արդեն կարդացվել։ Յուրաքանչյուր ամակ ունի տեքստ և թե 
// ում կողմից է ուղարկված։
// message_read_info({text: “hello”, from: “ananymous”}) => 
// read on 2018-Nov-18 by user 1 // message is not yet read

let messages = [
{text: "What is this?", from: 'Daniel'},
{text: "What is your name?", from: 'Narine'},
{text: "Hou old are you?", from: 'Sergey'},
{text: "What colot is it?", from: 'Anna'}
];
let readMessages = new Map();
function didUserRead(users, username) {
//return !!users.username ;
return typeof users.username === 'undefined' || users.username === null? false: true;
}

function readMessage(message, username) {
	if (!readMessages.has(message)) {
		readMessages.set(message, {});
	} else if (didUserRead(readMessages.get(message), username)){
		return 
	}
const users = readMessages.get(message);
users[username] = new Date();
readMessages.set(message, users);
}

function firstRead(message){
//for(let key of readMessages.keys()){
	if(readMessages.has(message)){
		return readMessages.get(message);
	}else{
	console.log("Message is not yet read:");
	} 
}

readMessage(messages[0], 'user 1');
readMessage(messages[1], 'user 1');
readMessage(messages[0], 'user 1');
readMessage(messages[2], 'user 2');
readMessage(messages[0], 'user 2');
readMessage(messages[1], 'user 2');
readMessage(messages[1], 'user 3');
console.log(firstRead(messages[0]));
setTimeout(function() {console.log(firstRead(messages[1]))}, 2000);
setTimeout(function() {console.log(firstRead(messages[2]))}, 4000);
