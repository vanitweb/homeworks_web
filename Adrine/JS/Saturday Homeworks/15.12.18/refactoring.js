//3. Рефакторинг

/*function func(s, a, b) {
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
console.log(func('', 'b', 'a'));*/
 // Как бы вы переписали этот код?
  
function func(s, a, b) {
	if (s.length == 0) {
       return -1;
   }
    var aIndex = s.indexOf(a);
	var bIndex = s.indexOf(b);
	if(aIndex != -1 && bIndex == -1) {
		
			return aIndex;
		}
		else if (aIndex == -1 && bIndex != -1){
			return bIndex;
		}
		else if (aIndex != -1 && bIndex != -1){
		 return Math.max(aIndex, bIndex);
	}
	
	else return -1;
}
	
	

console.log(func('dbsadg', 's', 'g'));  
console.log(func('abasassa', 'a', 's'));  
