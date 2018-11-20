//dasaranayin
let People = 
[
	{
		name:"Anun1",
		surname:"Azganun1",
		age:15,
		email:"AAA.a@mail.ru"
	},
	{
		name:"Anun2",
		surname:"Azganun2",
		age:12,
		email:"BBB.b@mail.ru"	
	},
	{
		name:"Anun3",
		surname:"Azganun3",
		age:32,
		email:"CCC.c@mail.ru"	
	}
];

var Person = new Map();
Person.set(People[0],{"jobtitle":"usucich", "salary":10000, "experience":10});
Person.set(People[1],{"jobtitle":"dasaxos", "salary":12000, "experience":15});
Person.set(People[2],{"jobtitle":"cragravorogh", "salary":150000, "experience":3});

function employent(persone)
{	
	return (Person.get(persone));
}
console.log(employent(People[1]));


//1 kardacac chkardacac namakner
 let message = 
[
	{
		"text":"ABC",
		"user":"AB"
	},
	{
		"text":"ABCD",
		"user":"ABC"
	},
	{
		"text":"ABCDE",
		"user":"ABCD"
	}
];

var namak = new Map();
namak.add(message[0]);
namak.add(message[1]);


function messigefunc(message)
{	
	return namak.has(message);
}
console.log(messigefunc(messagege[0]));
console.log(messigefunc(message[1]));
console.log(messigefunc(message[2]));

//qani angam e kardacvel sxal...
 let message = 
[
	{
		"text":"ABC",
		"user":"AB"
	},
	{
		"text":"ABCD",
		"user":"ABC"
	},
	{
		"text":"ABCDE",
		"user":"ABCD"
	}
];

var namak = new Map();
namak.add(message[0]);
namak.add(message[1]);
namak.add(message[2]);
function func(persone)
{	
	return (namak.get(persone));
}
for(i = 1; i < 10; i++)
{
	console.log(func(message[1]));
	if(i = 1)
	{
		console.log("kardacvel e araji angam");
	}
}










