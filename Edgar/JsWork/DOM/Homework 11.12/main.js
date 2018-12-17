/*Реализовать функцию, создающую глубокую копию 
(deep copy) объекта без использования JSON.stringify*/
let object2 = {
  a: 1,
  b: 2,
  c: 3
};
console.log(JSON.stringify(object2,' '));
//tarberak 1
let cop = Object.assign({}, object2);
console.log("cop", cop);
//tarberak 2
let cop2 = {...object2};
console.log("cop2", cop2);
//tarberak 3
console.log(JSON.parse(object2));

/*1. Задача
Реализовать функцию checkBraces($str), 
проверяющую на синтаксическую верность последовательность скобок*/
function checkBraces(value) {
	var str = text.split('');
	var arr = [];
	for (var i = 0; i < str.length; i++) {
		if (str[i] === "(" || str[i] === "[" || str[i] === "<") {
			arr.push(str[i]);
		} else if (str[i] === ")") {
			if (arr.pop() !== "(") { return 0 }
		} else if (str[i] === "]") {
			if (arr.pop() !== "[") { return 0 }
		} else if (str[i] === ">")  {
			if (arr.pop() !== ">") { return 0 }
		}
	}
	return 1;
}

/*3. Рефакторинг*/
function func (s, a, b) {
			if (s.match(/^$/)) {
                return -1;
            }
			var aIndex = s.lastIndexOf(a);
			if (aIndex == -1) {
                return s.lastIndexOf(b);
            }
			var bIndex = s.lastIndexOf(b);
			return bIndex != -1 ? Math.max(aIndex, bIndex) : -1;
};
