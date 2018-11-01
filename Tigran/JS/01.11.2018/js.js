//                    2rd

// chisht chi  ashxatum    
let k = 0;
let obj = {};
let text01 = "asad dafs iop ittuu uttt yiii"; 
function tareri_qanak(text) {
	text = text.split("");
	console.log(text);
	for (let i = 0; i < text.length; i++) {
		for (let j = 0; j < text.length; j++) {  
			if (text[i] === text[j]) {
				k++;
			}
		}
		console.log(text[i],k);  // chisht chi  ashxatum    
		obj[text[i]] = 
		k = 0;
	}
}
tareri_qanak(text01);


//                                       3rd


let gumar;
function F(f,a,b,c){
	gumar = a + b + c;
	return f(gumar);	
}
function print(x){
	console.log(x);
}
function square(x){
	console.log(x*x);
}
function prime(x) {
	for(var i = 2; i < (parseInt(Math.sqrt(x)) + 1); i++){
	    if(x % i === 0){
	        break;
	    }
	}
	if(i === parseInt(Math.sqrt(x)) + 1 && x !== 1){
		console.log(`${x} parz tiv e`);
	}else{
	   	console.log(`${x} parz tiv che`);
	}
}
F(print,4,5,6);
F(square,4,5,6);
F(prime,4,5,6);

	






















