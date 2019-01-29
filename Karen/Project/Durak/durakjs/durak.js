let player = [];
let comp = [];
let cards = [];
let dasht = [];
let trump = 0;



function cardMixing() {                   //qarer@ xarnel
	for(let i = 0; i < 36; i++) {
		cards[i] = i + 1;
		const img = new Image(97, 150);
		let j = i + 1;
		img.src = 'imageCard/' + j + '.jpg';
		const div = document.createElement('div');
		document.getElementById('card').appendChild(div).appendChild(img);
		let k = 'cardc' + j;
		div.setAttribute('id', k);
	}
	function Rand(a, b) {
  		return Math.random() - 0.5;
	}
	cards.sort(Rand);
	trump = cards[0];      //kozr arajin qartne ,bajan 4 i mnacordov kgtnenq mast
	//kozrStacum();
	let p = 'cardc' + trump;
	document.getElementById('trump').appendChild(document.getElementById(p));
	
}

function distribution() {                 //bajanum
	for(let i = 0; i < 6; i++) {
		player[i] = cards.pop();
		comp[i] = cards.pop();
		let w = 'cardc' + player[i];
		let q = 'cardc' + comp[i];
		document.getElementById('player').appendChild(document.getElementById(w));
		document.getElementById(w).setAttribute("class", "player");
		document.getElementById('comp').appendChild(document.getElementById(q));
		document.getElementById(q).setAttribute("class", "player");
	}
	for(let i = 1; i < cards.length; i++){
		let k = 'cardc' + cards[i];
		document.getElementById(k).setAttribute("class", "card");
	}
}


function start() {
	cardMixing();
	distribution();
}

function kozrStacum() {
	let mast = trump%4;
	for(i = 0; i < 36; i++) {
		if(mast == cards[i]%4) {
			cards[i] = cards[i] + 36;
		}
	}
}

