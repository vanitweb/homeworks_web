//Գրել ծրագիր, որի արդյունքում  էլեմենտները կստանան textarea-ի ներսում css  ֆորմատով գրված ոճերը՝ օրինակ (body {color: red}), անմիջապես textarea-ից դուրս մկնիկի click-ից  հետո։ Կիրառումից 5 վայրկյան անց բոլոր կիրառած ոճերը չեղարկել։

let text = document.getElementsByTagName("textarea")[0];
text.addEventListener('blur', addStyle);

function addStyle(){
	setTimeout(function(){
		let text = document.getElementsByTagName("textarea")[0].value;
		let style = document.getElementsByTagName("style")[0];
		style.textContent = text;
	}, 7000);
}

let body = document.getElementsByTagName('body')[0];
body.addEventListener('click', clearStyle);

function  clearStyle() {
	setTimeout(function(){
		let text = document.getElementsByTagName("textarea")[0].value;
		let style = document.getElementsByTagName("style")[0];
		style.textContent = '';
	}, 12000);
}