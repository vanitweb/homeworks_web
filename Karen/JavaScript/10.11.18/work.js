// 1. 'Afgd hdhfd jdjj Awer.'
function string_concat(text) {
	 text = text.split('');
	 let len = text.length;
	 for (let i = 0; i < len; i++) {
	 	if (text[i] === ' ') {
	 		text[i] = '-';
	 	}
	 }
	 text = text.join('');
	 console.log(text);
};
// 1 version 2.
function string_concat(text) {
	console.log(text.replace(/ /g, '-'))
}
// 2. 'asd kfj irurur jdj', 3
function make_short(text, n) {
	text = text.split('');
	let len = text.length, q = 0;
	for (let i = 0; i < len; i++) {
		if (text[i] === ' ') {
			q++;
			if (q === n) {
				text.splice(i, len);
			}
		}
	}
	text = text.join('');
	console.log(text);
};
// 3.1 'ab aba ghhju cab as'
function find_matches_count(text, seaText) {
	let ind = 0, q = 0;
	while (true) {
		let i = text.indexOf(seaText, ind);
		if (i == -1) break;
		q++;
		ind = i + 1;
	}
	console.log(`'${seaText}' is found ${q} times`)
};
// 3.2
function find_exact_matches_count(text, seaText) {
	let q = text.match(seaText).length;
	console.log(`'${seaText}' is found ${q} times`)
}
find_exact_matches_count('ab shhdjhd ab abbaba', /\bab\b/g);
// 4.
function fill_by_length(n, q) {

};
// 5.
function find_palindrome_words(text) {
	if (text == text.split('').reverse().join('')) {
		console.log(text);
	}
};
function generateID(n) {

}

function generateID_formate(n) {

}