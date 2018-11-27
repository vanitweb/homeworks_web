//1. Գրել ծրագիր, որը կօգնի հասկանալ, թե որ նամակներն են արդեն կարդացած։ Յուրաքանչյուր նամակ ունի տեքստ և թե ում կողմից է ուղարկված։
//is_message_read({text: “hello”, from: “ananymous”}) => true/false

let UserEmail = [
		{text : 'hellow', from : 'user1'},
		{text : 'hellow', from : 'user2'},
		{text : 'hellow', from : 'user3'}
];
let email = new Set();
	email.add(UserEmail[1]);
function is_message_read(UserEmail){
	return email.has(UserEmail);
};	
console.log(is_message_read(UserEmail[1]));


/*2.Գրել ծրագիր, որը կօգնի հասկանալ, թե որ նամակներն են արդեն կարդացած և երբ(առաջին անգամ) և ում կողմից են նրանք արդեն կարդացվել։ Յուրաքանչյուր նամակ ունի տեքստ և թե ում կողմից է ուղարկված։
message_read_info({text: “hello”, from: “ananymous”}) => read on 2018-Nov-18 by user 1 // message is not yet read */

let readMail = new Map();
let messages = [
	{text : 'hellow', from : 'user1'},
	{text : 'hellow', from : 'user2'},
	{text : 'hellow', from : 'user3'}
];
function read (message, user){
	if(!readMail.has(message) || !readMail.get(message)[user]){
		readMail.set(message, {[user] : new Date()});
	}else{
		console.log('this message is not yet read');
	}
}
read(messages[1], "Nare");
console.log(readMail);
read(messages[2], "Roman");
console.log(readMail);



