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
		document.getElementById('comp').appendChild(document.getElementById(q));

	}
}


function start() {
	cardMixing();
	//distribution();
}


console.log(player,comp,cards);

