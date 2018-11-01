//1. Գրել ֆունկցիա, որը հաշվում է տեքստի յուրաքանչյուր տառի հանդիպումների քանակը

function letCount(text) {
    for(let i = 0; i <= text.length; i++){
	let size = 0;
        for(let j = 0; j <= text.length; j++){
            if(text[i] === text[j]) {
    		size++;
            }
        }	 
        console.log(`${text[i]} տառի հանդիպումների քանակը ${size} է`);
    }
}
let str = "ajhjshdsjahd";
letCount(str);
