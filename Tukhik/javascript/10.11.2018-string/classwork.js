//patahakan tveri u tareri sharq grel
let r = Math.random().toString(36).substring(3);
console.log("random", r);
//kam
function rondom1(chap){
	let text1 = '';
	let possible1 = "abcdefghijklmnopqrstyvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01123456789";
	for (let i = 0; i < chap; i++) {
    	text1 += possible1.charAt(Math.floor(Math.random() * possible1.length));
  	}
  	return text1;
}
console.log(rondom1(10));

//XXXnn_xxxnn.... tesqi patahakan tveri u tareri sharq grel  n hat elementanoc
console.log('arajadranq 2');
function textRandom(qanak) {
	let p = 3, q = 2;
	let j = 1;
	let text = '';
	function num(){
		return Math.floor(Math.random() * 10); 
	}
	function letter(){
		let n = Math.floor(Math.random() * 26); 
		return String.fromCharCode(n + 97); 
	}
	for (let i = 1; i <= qanak; i++){
		if (j <= p) {
			text += letter();
			j++;
		}
		else if (j <= p + q){
			text += num();
			j++;
		}
		else if (j === p + q + 1){
			text += '-';
			j = 1;
		}
	}
	return text.substr(0, 3).toUpperCase() + text.substr(3);
}
console.log(textRandom(7));
