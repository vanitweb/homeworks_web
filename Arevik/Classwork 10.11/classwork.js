//Classwork
//generate_id(15); => "b7pwBqrZwqaDrex"
function generate_id(n) {
  let text = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < n; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}
console.log(generate_id(15));



//generate_id_format(12); => "ABC72_pkg15_etj"
function generate_id_format(n) {
	let numRand = function() {
		return Math.floor(Math.random() * 10); 
	}
	let charRand = function() {
    	let n = Math.floor(Math.random() * 25);
			return String.fromCharCode(n + 97); 
	}
	let strRand = '';
	let j = 1;
	for(let i=1; i<=n; ++i){
		if(j <= 3) {
			strRand += charRand();
			j++;
		}
		else if( j === 4 || j === 5){
			strRand += numRand();
			j++;
		}
		else if(j === 6) {
			strRand += '_';
			j=1;
		}
	}
	return strRand.substr(0, 3).toUpperCase() + strRand.substr(3);
}
console.log(generate_id_format(12));
console.log(generate_id_format(15));













 