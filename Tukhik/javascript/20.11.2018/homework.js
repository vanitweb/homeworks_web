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
setTimeout(function() {console.log(firstRead(messages[1])) }, 2000);
setTimeout(function() { console.log(firstRead(messages[2]))}, 4000);
