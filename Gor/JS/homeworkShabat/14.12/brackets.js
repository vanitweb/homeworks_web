//validate brackets in string
const openBrackets = ['(', '{', '[', '<'];
const closeBrackets = [')', '}', ']', '>'];
function validateBrackets(str) {
	let stack = new Array();
	for(let i = 0, len = str.length; i < len; i++) {
		if(stack.length === 0 && closeBrackets.indexOf(str[i]) > -1) {
			return false;
		}
		if(openBrackets.indexOf(str[i]) > -1) {
			stack.push(str[i]);
		} else if(closeBrackets.indexOf(str[i]) > -1) {
			if(closeBrackets.indexOf(str[i]) === openBrackets.indexOf(stack[stack.length - 1])) {
				stack.pop();
			} else {
				return false;
			}
		}
	}
		return (stack.length === 0);
}