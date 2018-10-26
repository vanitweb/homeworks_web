//հաջորդականության մեջ առկա  բոլոր նետերի քանակը

function net(str){
    let count = 0;
    for(let i = 0,len = str.length; i < len; i++){
	if((str[i] === '>') && (str[i + 1] === '>')){
	    let k = 2;
	    while(str[i + k] === '-'){
		k++;
	    }
	    if((str[i + k] === '>') && (k != 2)) count++;
	} else {
	      if(str[i] === '<'){
                  let k = 1;
                  while(str[i + k] === '-'){
                      k++;
                  }
                  if((str[i + k] === '<') && (str[i + k + 1] === '<') && (k != 1)) count++;
              } 
	  }
    }
    return count;
}
let string = "<<<-->>><----<<>>-->>";
console.log(` ${string} հաջորդականության մեջ առկա  բոլոր նետերի քանակը կլինի `);
console.log(net(string));
