
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
	console.log(obj1); 
	console.log(obj2);
}
tarberutyun({a: 2, b: 2, d : 4}, {a: 2, b: 2, k : 4});
