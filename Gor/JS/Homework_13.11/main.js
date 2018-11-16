//Homeworks_13.11
function validateProductKey(str) {
	let re = /(^([A-Z]{3})([0-9]{2}))(\-((([a-z]{3})([0-9]{1,2}))|([a-z]{1,3})))*|(^([A-Z]{3})([0-9]{1,2}))|(^[A-Z]{1,3})/g;
	let str1 = str.match(re);
	let boo = (str1[0] === str);
	return boo;
}
validateProductKey("XXX11-xxx22-aaa33-hhh1");