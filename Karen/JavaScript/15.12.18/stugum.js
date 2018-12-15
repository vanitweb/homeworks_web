function checkBrackets (text) {
    const len = text.length;
    const stack = [];
    for(let i = 0; i < len; i++) {
        const sym = text[i];
        if(sym == '(' || sym == '{' || sym == '[' || sym == '<') {
            stack.push(sym);
        } else if(sym == ')' || sym == '}' || sym == ']' || sym == '>') {
            const last == stack[stack.length - 1];
            if(sym == '')
        }
    }
}