//aybbenakan kargov dasavorel
function sort(text) {
    let simvol;
    let xxx = text.split('');
    for(let i = 0, len = xxx.length - 1; i < len; i++) {
        for (let j = i + 1, leng = xxx.item; j < leng; j++) {
            if(xxx[j] < xxx[i]) {
                simvol = xxx[j];
                xxx[j] = xxx[i];
                xxx[i] = simvol;
            }
        }
    }
    return xxx;
}
let text = "zxcvbnmlkjhgfdsaqwertyuiop";
console.log(sort(text));
//texti abolor bareri arajin tarer@ dardznel metsatar
function metsatar(text) {
    let textArray = text.split(' ');
    for(let i = 0; i < textArray.length; i++) {
       // let newArray = item.split('');
        textArray[i] = textArray[i][0].toUpperCase() + textArray[i].slice(1);
    }
    console.log(textArray);
}
metsatar("sdfg sdfg ff fd gd gd fg ddf")