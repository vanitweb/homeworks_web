//Task 1. Գրել զանգված, որը պարունակում է օբյեկտներ, որոնցից յուրաքանչյուրը պարունակում է ինֆորմացիա՝ կարդացած կամ չկարդացած գրքերի մասին։ Գրել ֆունկցիա, որը որպես արգումենտ ստանա boolean փոփոխական և true արժեքի դեպքում կտպի կարդացած գրքերի անունները, false-ի դեպքում՝ չկարդացած գրքերի անունները։

let myBooks = [
	{author: "O'Relli", title: "JavaScript: The definitive guide", read: true},
	{author: "David Herman", title: "JavaScript", read: false},
];
function printBooks(read) {
	for(let i = 0; i < myBooks.length; i++) {
		if(read === myBooks[i].read) {
			console.log(myBooks[i].title);
		}
	}
}
printBooks(false);


//Task 2. Գրել ֆունկցիա, որը որպես արգումենտ կստանա երկու օբյեկտ և կվերադարձնի այդ օբյեկտների տարբերությունը՝ մեկ այլ օբյեկտի մեջ։

function getDiff (obj1, obj2){
	let objDiff = {};
	let i = 1;
	for (let key in obj1){
		i = 1;
		for (let key1 in obj2) {
			if(key !== key1 && i == 1){
				objDiff[key1] = obj2[key1];
				objDiff[key]  = obj1[key];
			}
			else if (key === key1){
				delete obj2[key1] ;
			}
			i++;
		}
}	return objDiff;
	}
let obj1 = {a:2, b:2, c:3, e:4};
let obj2 = {a:2, b:2, c:3, d:4};
console.log(getDiff(obj1, obj2));


//Task 3. Գրել ծրագիր, որը տպված օբյեկտը կշրջի։

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

