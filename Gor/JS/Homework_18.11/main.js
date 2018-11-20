//18.11.2018 homeworks
//homework 1: Գրել ծրագիր, որը կօգնի հասկանալ, թե որ նամակներն են արդեն կարդացած։ Յուրաքանչյուր նամակ ունի տեքստ և թե ում կողմից է ուղարկված։ is_message_read({text: “hello”, from: “ananymous”}) => true/false
let messages = [
	{
		text: "hello",
		from: 'ananymos',
	},
	{
		text: "how are you",
		from: 'Gor',
	},
	{
		text: "I'm fine" ,
		from: 'David',
	},
	{
		text: "Good by",
		from: 'me',
	}
];
let read = new Set();
read.add(messages[0]);
read.add(messages[2]);
function isMessageRead(message) {
	return read.has(message);
}
console.log(isMessageRead(messages[0]));
//homework 2: Գրել ծրագիր, որը կօգնի հասկանալ, թե որ նամակներն են արդեն կարդացած և երբ(առաջին անգամ) և ում կողմից են նրանք արդեն կարդացվել։ Յուրաքանչյուր նամակ ունի տեքստ և թե ում կողմից է ուղարկված։ message_read_info({text: “hello”, from: “ananymous”}) => read on 2018-Nov-18 by user 1 // message is not yet read
let messageRead = new Map();
messageRead.set(messages[1], {"user1": new Date(2018, 11, 18)});
messageRead.set(messages[1], {"user1": new Date(2018, 11, 19)});
function messageReadInfo(message) {
	if(messageRead.has(message)) {
		console.log(messageRead.get(message));
	} else {
		console.log("Message is not yet read:");
	}
}
messageReadInfo(messages[1]);