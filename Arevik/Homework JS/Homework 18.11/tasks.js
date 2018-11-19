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

let read = [
	{user1: new Date(2018, 11, 18)},
	{user2: new Date(2018, 11, 19)},
	{user3: new Date(2018, 11, 20)}
];

let messages = [
	{text: "What is this?", from: 'Daniel'},
	{text: "What is your name?", from: 'Narine'},
	{text: "Hou old are you?", from: 'Sergey'},
	{text: "What colot is it?",	from: 'Anna'}
];

let messageRead = new Map();
messageRead.set(messages[1], read[0]);
messageRead.set(messages[2], read[1]);

function funcMessageInfo(messages) {
	for(let [key, value] of messageRead){
		if(messageRead.has(messages)) {
			console.log(value);
			break;
		}
		
		else{
			console.log("Message is not yet read:");
			break;
		}
	}
}
funcMessageInfo(messages[0]);
funcMessageInfo(messages[1]);
funcMessageInfo(messages[2]);
funcMessageInfo(messages[3]);
