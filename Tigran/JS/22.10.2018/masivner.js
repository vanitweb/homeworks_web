//                            mijin tvabanakan
const array = [1, 2, 3, 4, 9, 5, 6, 4, 7, 9, 4, 112, 145, 4, 7, 8];
let mijintv = 0;
for (let item of array) {
	mijintv += item;
}
mijintv = mijintv / array.length;
console.log(`masivi mijin tvabanakan ${mijintv}`);

//                               zuyg kent 

const masiv = [120,78,7154,42,157,56,487,398,9,1,2,7,16,110];
let masivkent = [];
let masivzuyg = [];
for (let i = masiv.length - 1; i >= 0; i--) {
	if (masiv[i] % 2 === 0) {
		masivkent.push(masiv[i]);
	}else{
		masivzuyg.push(masiv[i]);
	}
}
console.log(masivkent);
console.log(masivzuyg);

//                                 reverse

let bar = "QWERTYUI";
var tars = "" ;
for (var i = bar.length - 1; i >= 0; i--) {	
	tars += bar[i];
}
console.log(tars);

//                                achman kargov





// var x = 455;
// var	y = -999;
// console.log(`x = ${x}`)
// console.log(`y = ${y}`)
// x = x + y; //
// y = x - y; //
// x = x - y; //
// console.log(`x = ${x}`)
// console.log(`y = ${y}`)


const masivni = [4,1,7,8,79,12,33,45,10,-56,48,789,123]
console.log(masivni);
for (var i = 0; i < masivni.length; i++) {
	for (var j = 0; j < masivni.length; j++) {
		if(masivni[i] < masivni[j]){ 
			masivni[i] = masivni[i] + masivni[j];
			masivni[j] = masivni[i] - masivni[j];
			masivni[i] = masivni[i] - masivni[j];	
		}
	}
}
console.log(masivni);


//                                shat krknvox 





var krkqanak = [];
var x = 0;
let arrs = [1, 15, 4, 7, 5, 756, 7, 878, 78, 78, 25, 7, 35, 1, 2, 41, 1, 78, 7];
for (let arjeq of arrs){
    for (var i = 0; i <= arrs.length - 1; i++){
        if(arjeq === arrs[i]){
              x++;
        }else{
        	continue;
        }
        // console.log(arjeq, arrs[i], x);
        krkqanak.push(x);
    }
    x = 0;
    // console.log(arjeq,i)
}
console.log(arrs);
console.log(`krknec  ${Math.max(...krkqanak)}`);