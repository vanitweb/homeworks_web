//task:Զանգվածի վերադարձ, զանգվածի էլէմենտների գումար
let arr =[];
let func = function(a, b, c){
	for(i = a; i <= b; i=i+c){
		arr.push(i);
		}
	return arr;
}
console.log(func(2,15,3));

function sumArray() { 
    let summa = 0;
    for (i = 0; i < arr.length; i++){
      summa += arr[i];
    }
    console.log(summa);
}
sumArray(arr);


//Նետերի քանակ


function dash(str){
	let str1 = "<<<-->>><----<<>>-->>->><<-<>>>-<";
	let sum = 0;
	let size = str.length;
	for(let i = 0; i < size -3; ++i) {
		if(str[i] == '<' && str[i + 1] == '<' ){
			let j = i + 2;
			while(str[j] == '-'){
			j++;
			}
			if(str[j - 1] == "-" && str[j] == "<") {
			sum += 1;
			}
			i = j -1;
		}
		else if(str[i] == '<' && str[i + 1] == '-' ) {
			let j = i + 2;
			while(str[j] == "-"){
			j++;
			}
			if(str[j] == "<" && str[j + 1] == "<") {
			sum += 1;
			}
			i = j - 1;
		}
		else if(str[i] == '>' && str[i + 1] == '>' ) {
			let j = i + 2;
			while(str[j] == '-'){
			j++;
			}
			if(str[j - 1] == '-' && str[j] == ">") {
			sum += 1;
			}
			i = j - 1;
		}
		else if(str[i] == '>' && str[i + 1] == '-' ){
			let j = i + 2;
			while(str[j] == "-"){
			j++;
			}
			if(str[j] == ">" && str[j + 1] == ">") {
			sum += 1;
			}
			i = j - 1;
		}
	}
return sum;
console.log(` նետերի քանակը։ ${sum}`);
}








