
//Classwork.Գրել ծրագիր, որով կարող ենք ստուգել, արդյոք աշխատում է տվյալ մարդը, թե ոչ։
let  myMap = new Map();

let persons = [
	{name: "Anna",
	surname: "Hakobyan",
	age: 54,
	username: "AnnaH",
	password: "123234A"},
	
	{name: "Meri",
	surname: "Sargsyan",
	age: 34,
	username: "MariS",
	password: "565656S"},

	{name: "Diana",
	surname: "Sahakyan",
	age: 45,
	username: "DianaS",
	password: "l767675D"}
];

let employment = [
	{workplace: "Unibank", 
	jobTitle:  "credit specialist",
	salary: 200000},
	
	{workplace: "Inekobank", 
	jobTitle:  "menejer",
	salary: 250000}
];


myMap.set(persons[0], employment[1]);
myMap.set(persons[1], employment[0]);
	

function workingPersons(persons){
    if(myMap.has(persons)){
		console.log("This person works");
	}else{
		console.log("This person does not work");
	}
}

workingPersons(persons[0]);
workingPersons(persons[1]);
workingPersons(persons[2]);




