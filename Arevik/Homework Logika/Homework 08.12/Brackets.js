//1. Задача. Реализовать функцию checkBraces($str), проверяющую на синтаксическую верность последовательность скобок. Необходимо учитывать вложенность. Обратите внимание на производительность вашего решения. В случае ошибки возвращаем 1, в противном случае 0


let checkBracketes = function(code){
	let open  =  ['[', '<', '(', '{', '"', "'"];
	let close = [']', '>', ')', '}', '"', "'"];
	let balanced = [];
	let arr = code.replace(/[^\(\)\<\>\[\]\{\}\'\'\"\"]/g,'').split('');
    if(arr.length % 2 !== 0){
		return 1;
	}  
    for(let i = arr.length-1; i >= 0; i--){
        if(close.indexOf(arr[i]) >= 0) 
            balanced.push(arr[i]);
        else{  
            if(open.indexOf(arr[i])!== close.indexOf(balanced[balanced.length-1]))
                return 1;
            else
                balanced.pop();
        }
    }
    return (balanced.length>0)?1:0;
};

console.log(checkBracketes("---(++++)----"))// == 0
console.log(checkBracketes(""))// -> 0
console.log(checkBracketes("before ( middle []) after "))// == 0
console.log(checkBracketes(") ("))// == 1
console.log(checkBracketes("} {"))// == 1
console.log(checkBracketes("<(   >)"))// == 1
console.log(checkBracketes("(  [  <>  ()  ]  <>  )"))// == 0
console.log(checkBracketes("   (      [)"))// == 1
