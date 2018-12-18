

//օգտվելով ստեքներից գրել խնդիրը երբ փակագծերը բոլոր տեսակի են
console.log(`pakagceri xndir mek pakagtsov`);
function checkBrackets(text, charOpen, charClose) {
    let count = 0;
    for(let i = 0; i < text.length; ++i) {
        if(text[i] === charOpen) {
        count++;
    }
    else if(text[i] === charClose) {
        count--;
        if(count < 0){
        return false;
        }
    }
    }
return count === 0;
}
console.log(checkBrackets('()()((( (( ))))', '(', ')'));


console.log(`օբյեկտը քոփի անել`);
function objCopy(obj){
    let objReturn = {};
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    for(let i = 0; i < values.length; ++i){
        if(values[i] instanceof Object){
            objReturn[keys[i]] = objCopy(values[i]);
    }
    else {
        objReturn[keys[i]] = values[i];
    }
}
return objReturn;
}
let obj = {a:1, b: 2, c: {e: 1, f: 2}};
console.log(objCopy(obj));
console.log(obj);



console.log(`pakagceri xndiry`);

let open = ['[', '{', '('];
let close = [']', '}', ')'];
let isBalanced = function(code){
    let balanced = [];
    let arr = code.replace(/[^\(\)\[\]\{\}]/g,'').split('');
    if(arr.length % 2 !== 0){
        return false;
}  
    for(let i=arr.length-1; i>=0; i--){
        if(close.indexOf(arr[i])>=0) 
            balanced.push(arr[i]);
        else{  
            if(open.indexOf(arr[i])!==close.indexOf(balanced[balanced.length-1]))
                return false;
            else
                balanced.pop();
        }
    }
    return (balanced.length>0)?false:true;
};
console.log(isBalanced('<>[ccg[]{{}}<a>[]]b{([0 {mmm }9])}'));   


console.log(`Рефакторинг`)

function func(s, a, b) {

  if (s.match(/^$/)) {
      return -1;
  }

  var i = s.length -1;
  var aIndex =     -1;
  var bIndex =     -1;

  while ((aIndex == -1) && (bIndex == -1) && (i > 0)) {
      if (s.substring(i, i +1) == a) {
          aIndex = i;
     }
      if (s.substring(i, i +1) == b) {
          bIndex = i;
     }
      i = i - 1;
  }

  if (aIndex != -1) {
      if (bIndex == -1) {
          return aIndex;
      }
      else {
          return Math.max(aIndex, bIndex);
      }
  }

  if (bIndex != -1) {
      return bIndex;
  }
  else {
      return -1;
  }
}
console.log(func("btyty", "a", "b"));
console.log(func("tayatyb", "a", "b"));
console.log(func("atyty", "a", "b"));
console.log(func("tytbby", "a", "b"));
console.log(func("aaatytbby", "a", "b"));


//kam
function newFunc(s, a, b) {
   let indexA = s.lastIndexOf('a');
   let indexB = s.lastIndexOf('b'); 
      let maxIndex =  Math.max(indexB, indexA); 
      if(maxIndex == 0){
        return '-1';
      }  
      else return maxIndex;
   }
console.log(newFunc("btyty", "a", "b"));
console.log(newFunc("tayatyb", "a", "b"));
console.log(newFunc("atyty", "a", "b"));
console.log(newFunc("tytbby", "a", "b"));
console.log(newFunc("aaatytbby", "a", "b"));