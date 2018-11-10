//object
//stexcel funkcia vorn ir mej uni object, funkcian kancheluc poxel obyekti valuener@
function updateObject() {
	const car = {name: "BMW", model: "365"};
	return function (key, value) {
		car[key] = value;
		console.log(car);
	}
}
let update = updateObject();
update("sharjich", "benzin");
update("sharji", "benzi");
//xndir 2: obyekt, vori mej obyekt a, et obyektn el obyekt a 2 keyov 
function returnValue(obj, key) {
	const person = {
		"Gor": {"tariq": 25, "qaxaq": "Vanadzor"}, 
		  "Edgar" : {"tariq": 32, "qaxaq": "Vanadzor"},
	};
	if(key !== undefined) {
		console.log(person[obj][key]);
	} else {
		console.log(person[obj]);
	}	
}
returnValue("Edgar", "qaxaq");