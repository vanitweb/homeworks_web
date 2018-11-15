//Task - փակագծերի ճշտություն կիսատ է
function scobCorect(str) {
    let strReturn = '';
    for(let i = str.length - 1; i >= 0 ;i--) {
        if((str[i] === '[') || (str[i] === '{') || (str[i] === '<') || (str[i] === '(') ) {
            for(let j = i + 1 ; j < str.length; j++) {
                if((str[j] === ']') || (str[j] === '}') || (str[j] === '>') || (str[j] === ')')) {
                    if((str[i] === '[' && str[j] === ']' && str.substring(i + 1,j) === /[^\{\}\[\]<>()]/) ||
                       (str[i] === '{' && str[j] === '}' && str.substring(i + 1,j) === /[^\{\}\[\]<>()]/) ||
                       (str[i] === '<' && str[j] === '>' && str.substring(i + 1,j) === /[^\{\}\[\]<>()]/) ||
                       (str[i] === '(' && str[j] === ')' && str.substring(i + 1,j) === /[^\{\}\[\]<>()]/)) {
                        strReturn += str.substring(0,i); 
                        strReturn += str.substring(j + 1); 
                        str = strReturn;
                        break;
                    } console.log(str[i]); console.log(str[j]);

                } 

            }
        }  
    }
    return str;
}

let str = "sds{nh(ng)ll}hj<hjh>";
console.log(scobCorect(str)); 
