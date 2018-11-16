/*inch vor kod, stugel pakagcery, stugel bolor {}() bacvox pakvox pakagcery, ete stringi meja */
/*araji 3 rarery mecatax heto 2 poqr heto  _, heto xxxnn_XXXnn ...*/
/*gtnelu enq verji pakvox }-y u heto nayenq dra pakvoxy*/
let str = "dsds(cjsdb jdcjbIBC SDDK)BK{Hajastan aselis}aa[array,sasdodsi]sdsasdsa";
function mainCheck(n, n1, n2){
	let count1, count2;
	if(n.indexOf(n1) !== -1 && n.indexOf(n2) !== -1){
  count1 =n.lastIndexOf(n1);
  count2 =n.lastIndexOf(n2);
	}else{
		return (`not '${n1}' or '${n2}'`);
	
	}

 console.log("count1", count1);
 console.log("count2", count2);
 let r1 = n.substring(0, count2) + n.slice(count1+1);
 return("r1",r1);
}
console.log(mainCheck(str, ")", "("));
// let c = n.match(/^\((?=)|[[\s+[A-Za-z0-9_\[(?=[)\]].\s+]*)]*)$/g);
var regex1 = RegExp("[^A-Za-z0-9_,\. ]",'g');
var array1;

while ((array1 = regex1.exec(str)) !== null) {

  console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);
  // expected output: "Found foo. Next starts at 9."
  // expected output: "Found foo. Next starts at 19."
}
console.log(array1);

