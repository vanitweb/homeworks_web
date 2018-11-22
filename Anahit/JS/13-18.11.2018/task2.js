//2.Գրել ծրագիր, որը կօգնի հասկանալ, թե որ նամակներն են արդեն կարդացած և երբ(առաջին անգամ) և ում կողմից են նրանք արդեն կարդացվել։ Յուրաքանչյուր նամակ ունի տեքստ և թե ում կողմից է ուղարկված։
//message_read_info({text: “hello”, from: “ananymous”}) => read on 2018-Nov-18 by user 1 // message is not yet read

/* 
function message_read_info(obj) {
    if(read.get(obj)){
        console.log('կարդացվելէ տվյալ օգտատրերի կողմից`');
        console.log(Object.keys(read.get(obj)));
        console.log('1ին անգամ կարդացվել են`');
        let date = Object.values(read.get(obj));
        let minDate = date[0];
        for(let i = 1; i < date.length; i++) {
            if(date[i] < minDate) {
                minDate = date[i];
            }
        }
        console.log(minDate);
        } else {
            console.log('այդ նամակը կարդացված չէ');
        }
}
message_read_info(message1);
message_read_info(message2);
message_read_info(message3);
*/

let messages = [
	{text: "Hello", from: 'An'},
	{text: "By", from: 'Ani'},
	{text: "Good by", from: 'Aram'},
	{text: "Hi",	from: 'Hrach'}
];

let messageRead = new Map();

function readMessage(message, user) {
    let readinfo = messageRead.get(message);
    if(!readinfo) {
        readinfo = [];
    } else if (readinfo.filter(item => item.name === user).length > 0) {
            return;
    }
    readinfo.push({name: user, readon: new Date()});
    messageRead.set(message, readinfo);
}
readMessage(messages[1], 'user 1');
readMessage(messages[2], 'user 1');
readMessage(messages[3], 'user 2');
readMessage(messages[1], 'user 1');
readMessage(messages[3], 'user 3');

function funcMessageInfo(messages) {
	if(messageRead.has(messages)) {
		console.log(messageRead.get(messages));
	} else {
		console.log("Message is not yet read:");
	}
}
funcMessageInfo(messages[0]);
funcMessageInfo(messages[1]);
funcMessageInfo(messages[2]);
funcMessageInfo(messages[3]);
   
