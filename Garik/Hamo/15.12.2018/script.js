function func(s, a, b) {
    if(s.length <= 0){
        return -1;
    }
    const aIndex = s.lastIndexOf(a); 
    const bIndex = s.lastIndexOf(b);
    if(aIndex === -1 && bIndex === -1){
        return -1;
    }
    if(aIndex !== -1 && bIndex === -1){
        return aIndex;
    }
    if(aIndex === -1 && bIndex !== -1){
        return bIndex;
    }
    if(aIndex > bIndex){
        return aIndex;
    }else{
        return bIndex;
    }
}
function checkBrackets(text){
    let count = 0;
    let arr = [];
    for(let i in text){
        if(text[i] === "(" || text[i] === "<" || text[i] === "{" || text[i] === "["){
            arr.push(text[i])
            count++;
        }else if(text[i] === ")" || text[i] === ">" || text[i] === "}" || text[i] === "]"){
            arr.push(text[i])
            if(arr[arr.length - 1] === ")" && arr[arr.length - 2] === "("
              || arr[arr.length - 1] === ">" && arr[arr.length - 2] === "<"
              || arr[arr.length - 1] === "}" && arr[arr.length - 2] === "{"
              || arr[arr.length - 1] === "]" && arr[arr.length - 2] === "["){
                arr.splice(arr.length - 2, 2)
                count--;
            }else{
                return false;
            }
            if(count < 0){
                return false;
            }
        }
    }
    return count === 0;
}
console.log(checkBrackets("(safdsaf(sdgfdsg{[gfjhgf]}dfg))({fdhgfh[dg12345]gfhhgjk})"))