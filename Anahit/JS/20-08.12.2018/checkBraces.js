//Task check braces

function checkBraces(str) {
    let count = 0;
    let stack = [];
    for(let i = 0; i < str.length; ++i) {
        if(str[i] === '(' || str[i] === '[' || str[i] === '{' || str[i] === '<' || str[i] === '"') {
            stack.push(str[i]);
            count++;
        } else if(str[i] === ')' || str[i] === ']' || str[i] === '}' || str[i] === '>' || str[i] === '"')        {   if(count == 0) {
                return false;
            } else if((str[i] === ')' && stack.pop() === '(') || 
                      (str[i] === ']' && stack.pop() === '[') ||
                      (str[i] === '}' && stack.pop() === '{') ||
                      (str[i] === '>' && stack.pop() === '<') ||
                      (str[i] === '"' && stack.pop() === '"')) {
                count--;    
                } else {
                    return false;
                }
        }
    }
    if(count === 0) {
        return true;
    }
}
console.log(checkBraces("----(++++)----"));
console.log(checkBraces(""));
console.log(checkBraces(")("));
console.log(checkBraces("}{"));
console.log(checkBraces("<( >)"));
console.log(checkBraces("([<>()]<>)"));
console.log(checkBraces(" ( [)"));

