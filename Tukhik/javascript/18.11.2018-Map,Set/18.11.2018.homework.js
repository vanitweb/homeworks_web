let myMap = new Map();

let person = [{name: "Marine", surname: "Alaverdyan", age: 22},
	{name: "Any", surname: "Poghosyan", age: 20},
	{name: "Ella", surname: "Mesropyan", age: 18}]
let personJob = [{jobtitle: "cook", salary: 1000}, 
	{jobtitle: "teacher", salary: 1500}];
myMap.set(person[2], personJob[0]);
myMap.set(person[1], personJob[1]);

//funkcian chi ashxatum
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
let read = new Map();
read.set(letters[0]);
read.set(letters[1]);
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

let mySet = new Set();
let message = [{text: 'Hello', from: 'Any'},
				{text: 'Thank you', from: 'Alla'},
				{text: 'By', from: 'Any'}];
let user = [{'user1': Date(2010, 10, 18)},
			{'user2': Date(2008, 6, 10)},
			{'user1': Date(2011, 8, 2)}];


mySet.add(message[0], user[0]);
mySet.add(message[1], user[1]);
mySet.add(message[1], user[2]);
function reading(message) {
	if(mySet.has(message)){
		console.log(`read on ${user.Date} by ${user}`);
	}
	else {
		console.log("messageic is not yet read");
	}
}
reading(message[0]);
