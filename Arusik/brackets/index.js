
let text = '(){}[(({<euujrj>}))ruiw]';
let brackets = [];

let count = 0;
for (let i = 0; i < text.length; i++) {
	if (text[i] == '(' || text[i] == '{' || text[i] == '[' || text[i] == '<' ||
	text[i] == ')' || text[i] == ']' || text[i] == '}' || text[i] == '>') 
	{
		brackets.push(text[i]);
	}
}
console.log(brackets);
/*switch (brackets) {
	case '(': count += 1;
	break;
	case ')': count += -1;
	break;
	case '[': count += 2;
	break;
	case ']': count += -2;
	break;
	case '{': count += 3;
	break;
	case '}': count += -3;
	break;
	case '<': count += 4;
	break; 
	case '>': count += -4;
	break;
	default:
	console.log('Sorry, it is out of case');
	break; 
};
*/
for (let i = 0, len = brackets.length; i < len; i++) {
	if (brackets[i] == '(') {
		count += 1
	} else if( brackets[i] == ')'){
		count += -1
		if (count < 0) {
			console.log('wrong combination')
			break;
		}
	} else if (brackets[i] == '[') {
		count += 2
	} else if (brackets[i] == ']') {
		count += -2
		if (count < 0) {
			console.log('wrong combination')
			break;
		}
	} else if (brackets[i] == '{') {
		count += 3
		
	} else if (brackets[i] == '}') {
		count += -3
		if (count < 0) {
			console.log('wrong combination')
			break;
		}
	} else if (brackets[i] == '<') {
		count += 4
		
	} else if (brackets[i] == '>') {
		count += -4
		if (count < 0) {
			console.log('wrong combination')
			break;
		}
	}
}

if (count === 0){
	console.log('brackets are right');
}
