// ֆունկցիա, որը հածվում է տեքստի յուր․ տառի հանդիպումների քանակը։
let str = 'abna bnm';
let c = str.split("");
let count = {};
for(let i = 0;i < c.length; i++ ){
	if(count[c[i]] === undefined){
		count[c[i]] = 0;
	}
	count[c[i]]++;
}
for(let j in count){
	console.log(j + ' = ' + count[j]);
	
}
// ֆունկցիա, որը դինամիկ վերադարձնում է իր անունը
function myFname(){
	console.log(myFname.name);
}
myFname();
