//elementner e avelacnum objecti mej
function updateObject() {
const persons = {};
return function (key,value){
persons[key] = value;
console.log(persons);
}
}
const update = updateObject();
update("name1", 20);
update("name2", 30);

//tpum e tvyal ogtatiroj tariqn u qaxaq@
function newPersons(obj, key) {
	const persons = {
		"Tukhik" : { "age" : 31,
		"addres": "Vanadzor"},
		"Arevik" : { "age" : 35,
		"addres": "Vanadzor"},
		"Arusik" : { "age" : 30,
		"addres": "Vanadzor"},
		"Erik" : { "age" : 20,
		"addres": "Vanadzor"},
	}
	if (key) {
		return persons[obj][key]
	}
return persons[obj];
}
console.log(newPersons("Arevik"));

//1.Գրելզանգված, որըպարունակումէօբյեկտներ, որոնցիցյուրաքանչյուրըպարունակումէինֆորմացիա՝կարդացածկամչկարդացածգրքերիմասին։Գրելֆունկցիա, որըորպեսարգումենտկստանա boolean փոփոխականեւ true արժեքիդեպքումկտպիկարդացածգրքերիանունները, false֊իդեպքում՝չկարդացածգրքերիանունները։
let books = [
	{author : "Raffi", title : "Samvel", read: true},
	{author : "Dyuma", title: "Koms mote Qristo", read: true},
	{author : "Devid_Flenaga", title: "Java Script", read: false}
]
function trueFalse(read) {
	for(let i = 0; i < books.length; i++) {
		if (books[i].read == read) {
			console.log("author - " + books[i].author + "; title - "
	 		+ books[i].title)
		}
	}
}
trueFalse(true)

// Գրելֆունկցիա, որը որպես արգումենտ կստանա երկու օբյեկտ եւ կվերադարձնի այդ օբյեկտների տարբերությունը՝ մեկ այլ օբյեկտի մեջ։
function tarberutyun(obj1, obj2) {
	let obj3 = {};
	for (let i in obj1)  {
		for (let j in obj2) {
			if (i == j) {
				if (obj1[i] == obj2[j]) {
					delete obj1[i];
					delete obj2[j];
				}
			}	
		}
	}
	return(obj1 + obj2);  
}
console.log(tarberutyun({a: 2, b: 2, d : 4}, {a: 2, b: 2, k : 4}));


// grel cragir vor objecti mej key u value-i texer@ poxi
const week = {
	1 : 'monday',
	2 : 'tuesday',
	3 : 'wednesday',
	4 : 'thursday',
	5 : 'friday',
	6 : 'saturday',
	7 : 'sunday'
};
    
function changeWeek(){
	let weekReversed = {};
	for (let key in week) {
	weekReversed[week[key]] = key;
	}
	return weekReversed;
}
console.log(changeWeek()); 