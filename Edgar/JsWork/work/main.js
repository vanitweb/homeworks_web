function rand(max){
   let str =  "";
    let str1 = "";
  for (var i = 48; i < 122; i++){
      if(i >= 58 && i<= 65) continue;
    str += String.fromCharCode(i);
  }
   
  for (var i = 0; i < max; i++)
    str1 += str.charAt(Math.floor(Math.random() * str.length));
  }
  if(typeof str1.indexOf[0]  !== "string" && typeof str1.indexOf[1]  !== "string"){
      
  }
  return str1;
};
console.log(rand(12));


