//18.11.2018 homeworks
//homework 1: Գրել ծրագիր, որը կօգնի հասկանալ, թե որ նամակներն են արդեն կարդացած։ Յուրաքանչյուր նամակ ունի տեքստ և թե ում կողմից է ուղարկված։ is_message_read({text: “hello”, from: “ananymous”}) => true/false

let message = [
	{text: "What is this?", from: 'Daniel'},
	{text: "What is your name?", from: 'Narine'},
	{text: "Hou old are you?", from: 'Sergey'},
	{text: "What colot is it?",	from: 'Anna'}
];

let IsRead = new Set();
IsRead.add(message[1]);
IsRead.add(message[3]);

function isMessageRead(message) {
	return IsRead.has(message);
}
console.log(isMessageRead(message[0]));
console.log(isMessageRead(message[1]));
console.log(isMessageRead(message[2]));
console.log(isMessageRead(message[3]));




//homework 2: Գրել ծրագիր, որը կօգնի հասկանալ, թե որ նամակներն են արդեն կարդացած և երբ(առաջին անգամ) և ում կողմից են նրանք արդեն կարդացվել։ Յուրաքանչյուր նամակ ունի տեքստ և թե ում կողմից է ուղարկված։ message_read_info({text: “hello”, from: “ananymous”}) => read on 2018-Nov-18 by user 1 // message is not yet read

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
	if(readMessages.has(message)){
		console.log(readMessages.get(message));
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
firstRead(messages[0]);
firstRead(messages[1]);
firstRead(messages[2]);
