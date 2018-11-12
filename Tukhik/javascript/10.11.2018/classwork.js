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

//XXXnn_xxxnn.... tesqi patahakan tveri u tareri sharq grel
function classwork(qanak) {
	let p = 3, q = 2;
	let text = '';
	let possibleNum = "01123456789";
	let possibleCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let possible = "abcdefghijklmnopqrstyvwxyz";
	if (qanak <= p) {
		for (let i = 0; i < p; i++) {
    		text += possibleCaps.charAt(Math.floor(Math.random() * possibleCaps.length));
  		}
  	return text;
	}
 	if  (qanak < p + q) {
  		for (let i = 0; i < p; i++) {
    		text += possibleCaps.charAt(Math.floor(Math.random() * possibleCaps.length));
  		}
		for (let i = p; i < p+q; i++){
 			text += possibleNum.charAt(Math.floor(Math.random() * possibleNum.length));
		}
	}
 	for (let i = 0; i < p; i++) {
    	text += possibleCaps.charAt(Math.floor(Math.random() * possibleCaps.length));
  	}
	for (let i = p; i < p+q; i++){
  		text += possibleNum.charAt(Math.floor(Math.random() * possibleNum.length));
 	}
 	text += '_';
 	let count = Math.ceil(qanak / 5) - 1;
	while (text.length < qanak + count) {
		for(let i = 1; i <= p; i++) {
			if(text.length === qanak + count) {
				break;
			}
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		for(let i = 1; i <= q; i++) {
			if(text.length === qanak + count) {
				break;
			}
			text += possibleNum.charAt(Math.floor(Math.random() * possibleNum.length));
		}
		if(text.length === qanak + count) {
			break;
		} 
		else {
			text += '_';
		}
  	}
  	return text;
}
console.log(classwork(16));





