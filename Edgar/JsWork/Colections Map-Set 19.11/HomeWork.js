let obj3 = [
			{ readOn: "2018-Nov-18", from: "Zaven"},
			{ readOn: "2017-Mar-05", from: "Karen"},
			{ readOn: "2018-Apr-21", from: "Ani"},
			{ readOn: "2018-Jun-30", from: "Jhon"}
];
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
	read: false,
	readOn: "2018-Nov-18",
};
function is_message_read(value){
	return myMape.has(value) ? true : false;
}
myMape.set(Emails[0],obj3[0]);//?
myMape.set(Emails[2],obj3[2]);
console.log(is_message_read(Emails[0]));
console.log(is_message_read(Emails[1]));
console.log(is_message_read(Emails[2]));
/*2.Գրել ծրագիր, որը կօգնի հասկանալ, թե որ նամակներն են արդեն կարդացած և երբ(առաջին անգամ) և ում կողմից են նրանք արդեն կարդացվել։ Յուրաքանչյուր նամակ ունի տեքստ և թե ում կողմից է ուղարկված։
message_read_info({text: “hello”, from: “ananymous”}) => read on 2018-Nov-18 by user 1 // message is not yet read*/

function message_read_info(value2){
if (myMape.has(value2)) {

console.log(JSON.stringify(myMape.get(value2)));	
}else{
console.log("message is not read yet");
}
	return ;
}
message_read_info(Emails[0]);
message_read_info(Emails[1]);
message_read_info(Emails[2]);
