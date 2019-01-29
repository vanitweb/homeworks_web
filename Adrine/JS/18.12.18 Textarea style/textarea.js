/*Գրել ծրագիր, որի արդյունքում  էլեմենտները կստանան textarea-ի ներսում css  ֆորմատով գրված ոճերը՝ օրինակ (body {
    color: red
}), անմիջապես textarea-ից դուրս մկնիկի click-ից  հետո։ Կիրառումից 5 վայրկյան անց բոլոր կիրառած ոճերը չեղարկել։*/
let textarea = document.getElementById('t1');
textarea.onblur = function() {
	if(document.getElementsByTagName('style')[0]=== undefined) {
    	style1 = document.createElement('style');
		document.body.appendChild(style1);
	} else {
		style1 = document.getElementsByTagName('style')[0];
	}
	style1.textContent = textarea.value;
	setTimeout(function() { style1.textContent = " ";} , 5000);
}
                
                        
  
