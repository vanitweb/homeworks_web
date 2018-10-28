//                              shaxmat

const shaxmat = [];
for (let i = 0, length = 8; i < length; i++) {
	shaxmat[i] = [];
}

for (let j = 0, poqrlength = shaxmat.length; j < poqrlength; j++){
	for (let push = 0; push < poqrlength / 2; push++) {
		if(j % 2 === 0){
			shaxmat[j].push("#","*");
		}else{
			shaxmat[j].push("*","#");
		}
	}
}
console.log(shaxmat);

//                               ankyunagic

const ankyunagic = [];
for (let i = 0, length = 10; i < length; i++) {
	ankyunagic[i] = [8,8,8,8,8,8,8,8,8,8];
}
for (var j = 0, poqrlength = ankyunagic.length; j < poqrlength; j++){
	ankyunagic[j][j] = 1;//glaxvor` 1 er
	ankyunagic[j][poqrlength - j - 1] = 2;// erkrordakan` 2 ner 	
}	
for (q in ankyunagic){
	ankyunagic[q][q] = ankyunagic[q][q] + ankyunagic[q][poqrlength - 1 - q];
	ankyunagic[q][poqrlength - 1 - q] = ankyunagic[q][q] - ankyunagic[q][poqrlength - 1 - q];
	ankyunagic[q][q] = ankyunagic[q][q] - ankyunagic[q][poqrlength - 1 - q]; 
}
console.log(ankyunagic)

//                               3rd tnayin

const errord = [];
for (let i = 0, length = 10; i < length; i++) {
	errord[i] = [8,8,8,8,8,8,8,8,8,8];
}
for (let i = 0, ankyunagcic_verev = errord[i].length; i < ankyunagcic_verev; i++) {
	errord[i][i] = 1;
	for(let j = 0; j < i; j++){
		errord[i][j] = 0;
	}
	for(let k = errord.length - 1; k > i; k--){ // let k = i + 1, el = errord[i].length; k < el; k++
		errord[i][k] = 5;
	}
}
console.log(errord)

//                         4rd tnayin

const chorrord = [];
for (let i = 0, length = 10; i < length; i++) {
	chorrord[i] = [8,8,8,8,8,8,8,8,8,8];
}
for (let i = 0, ankyunagcic_verev = chorrord[i].length; i < ankyunagcic_verev; i++) {//0 ic 9 `` 10hat
	chorrord[i][i] = "*";
	chorrord[i][ankyunagcic_verev - 1 - i] = "#";
	for(let j = i + 1; j < chorrord.length - i; j++){
        chorrord[j][i] = 1;
    }
    for(let j = i + 1; j < chorrord.length - 1 - i; j++){
        chorrord[i][j] = 3;
    }
    for(let j = i + 1; j < chorrord.length - i; j++){
        chorrord[chorrord.length - j][chorrord.length -1 - i] = 2;
    }
    for(let j = i + 1; j < chorrord.length - i; j++){
        chorrord[chorrord.length - 1 - i][chorrord.length -1 - j] = 4;
    }
}
console.log(chorrord);