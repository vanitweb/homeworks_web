// arajadranq - XXXnn_xxxnn.... tesqi patahakan tveri u tareri sharq grel
function regExp(arg){
    let reg = /^(([A-Z]{1,3}$)?(([A-Z]{3})([0-9]{1,2})$)?(([A-Z]{3})([0-9]{2})[-])?(([a-z]{1,3}$)?(([a-z]{3})([0-9]{1,2})$)?(([a-z]{3})([0-9]{2})[-])?)+)$/;
    let result = reg.test(arg);
    console.log(result)
}
regExp("AGA11-aaa45-a")

//stugel ardyoq pakagcer@ chisht e drvac
// exec() ,  match()  indexOf    lastIndexOf()  findIndex()

	let open = ['[', '{', '('];
	let close = [']', '}', ')'];
let isBalanced = function(code){
	let balanced = [];
	let arr = code.replace(/[^\(\)\[\]\{\}]/g,'').split('');
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
console.log(isBalanced('<>[ccg[}<a>]]b{([0 {mmm }9])}'));   
