// function updateObject() {
// const persons = {};
// return function (key,value){
// persons[key] = value;
// console.log(persons);
// }
// }
// const update = updateObject();
// update("name1", 20);
// update("name2", 30);

 
// function shrjel(key, value) {
// 	const obj1 = {k:1};
// 	const obj2 = {};
// 	let func1 = function() {
	
// 	obj2[value] = 3;
	
// 	console.log(obj2);
// }
// console.log(obj2);
// }
// shrjel({k: 2});
// Object.prototype.getKey = function(value){
//   for(var key in this){
//     if(this[key] == value){
//       return key;
//     }
//   }
//   return null;
// };
// var myObj = {a : "2"};

// var key = myObj.getKey('2');
// console.log(key); // EL
// const yuorObj = {}

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