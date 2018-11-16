//Task1. Validate bracketst by regexp 
let open  =  ['[', '<', '(', '{'];
let close = [']', '>', ')', '}'];
let isBalanced = function(code){
	let balanced = [];
	let arr = code.replace(/[^\(\)\<\>\[\]\{\}]/g,'').split('');
    if(arr.length % 2 !== 0){
		return 0;
	}  
    for(let i=arr.length-1; i>=0; i--){
        if(close.indexOf(arr[i])>=0) 
            balanced.push(arr[i]);
        else{  
            if(open.indexOf(arr[i])!==close.indexOf(balanced[balanced.length-1]))
                return 0;
            else
                balanced.pop();
        }
    }
    return (balanced.length>0)?0:1;
};

console.log(isBalanced('<>[ccg[<a>]]b{([09])}'));   
console.log(isBalanced('<[[<>>]]([])'));          
console.log(isBalanced('][<>]]([])'));            
console.log(isBalanced('function(text);'));  



         
//Task2 Validate string'"ABC72_pkg15_etj56"'
console.log(/^[A-Z]{3}[0-9]{2}_[a-z]{3}[0-9]{2}_[a-z]{3}[0-9]{2}$/g.test('ABC72_pkg15_etj56'));