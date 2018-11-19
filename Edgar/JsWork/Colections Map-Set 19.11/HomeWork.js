/* Գրել ծրագիր, որը կօգնի հասկանալ, թե որ նամակներն են արդեն կարդացած։ Յուրաքանչյուր նամակ ունի տեքստ և թե ում կողմից է ուղարկված։*/

//is_message_read({text: "hello”, from: "ananymous”}) => true/false
let  myMape = new Map();

let Emails = [
			    {text: "hello Zara", from: "Davit"},
				{text: "For Davit", from: "Zara"},
				{text: "hello", from: "ananymous"},
				{text: "Barev", from: "Brain"},
];

let obj2 = {
	read: "2018-Nov-18",
};
function is_message_read(value){
	return myMape.has(value) ? true : false;
}
myMape.set(Emails[0], "true");//?
myMape.set(Emails[2],  obj2);
console.log(is_message_read(Emails[0]));
console.log(is_message_read(Emails[1]));
console.log(is_message_read(Emails[2]));
/*2.Գրել ծրագիր, որը կօգնի հասկանալ, թե որ նամակներն են արդեն կարդացած և երբ(առաջին անգամ) և ում կողմից են նրանք արդեն կարդացվել։ Յուրաքանչյուր նամակ ունի տեքստ և թե ում կողմից է ուղարկված։
message_read_info({text: “hello”, from: “ananymous”}) => read on 2018-Nov-18 by user 1 // message is not yet read*/
console.log(obj2.read);
function message_read_info (value2){
	console.log("read on " + obj2.read + " by ");
	console.log("message is not yet read");
	return ;
}
message_read_info(Emails[0]);
