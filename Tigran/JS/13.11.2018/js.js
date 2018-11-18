//                                   1 


let string = "Lorem ipsum dolor sit amet consectetur adipisicing.";
function string_concat(text) {
	text = text.split(" ");
	text = text.join("-");
	console.log(text);
}
string_concat(string);


//                                   2  


let string1 = "Lorem ipsum dolor sit amet, consectetur adipisicing."

function make_short(text1, qanak) {
	text1 = text1.split(" ", qanak);
	console.log(text1);
}
make_short(string1,2);

//                                  3.1


let tox = "thises is foetso baes es etsr ba bas klio kli kolikikl";
function tarery(tox,tar){

	let index = 0;
	let qanak = -1;
	while (index !== -1) {
  		qanak++;
  		index = tox.indexOf(tar, index + 1);
	}
	console.log(tar,qanak);
}
tarery(tox,"kl");


	

//                                    3.2


let tox = "Lorem ipsum dolor sit amet, conrum perspiciatis ipsum rerumnditiis veniam officiis voluptates! Quaerat, quam.";
function find(tox,bar){
	tox = tox.split(" ");
	let i = 0;
	let qanak = -1;
	while (i !== -1) {
  		qanak++;
  		i = tox.indexOf(bar, i + 1);
	}
	console.log(bar,qanak);
}
find(tox,"ipsum");

//                                       4

function fill_by_length(tiv, qanak, nshan){
    tiv = tiv.toString();
    let zro = tiv.padStart(qanak, '0');
    let pat = zro.split("");
    pat.unshift(nshan)
    pat = pat.join("");
    console.log(pat)
}
fill_by_length(15, 5, '[+]');


//                                       5


let tox = "Lorem ipsum dolor Aba sit ametema abqba consectetur adipisicing elit. Maxime,";
function find_palindrome_words(text) {
	text = text.split(" ");
	for(bar of text){
		let barrev = bar;
		barrev = barrev.split("");
		barrev = barrev.reverse();
		barrev = barrev.join("");
		if (barrev === bar) {
			console.log(`${bar} polindrom e`);
		}
	}
}
find_palindrome_words(tox);






















//ghh
