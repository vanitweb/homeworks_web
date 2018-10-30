//function fun(arg1, arg2, arg3){
// 	let a = [];
// 	while(arg1 < arg2){
// 		arg1 += arg3;
// 		if(arg1 < arg2) {
// 	 		a.push(arg1);
// 		}
// 	}
// console.log(a);
// return a;
// }
//
// let ver = fun(0,20,3);
// function ction() {
// 	let sum = 0;
// 	for (let i = 0; i < ver.length; i++) {
//         sum += ver[i]
//     } 
//     console.log(sum);
// }
// ction(ver);

function axex(net){
var a2 = 0;
var len = net.length;
 for (var i = 0; i < len; i++) {
 	for (var j = 0; j < len - i; j++) {
 		if ((net[i] === "<" && net[i + j + 1] === "<") && (net[i + j + 2] === "<")) {
 			for (var k = 1; k < len - i; k++) {
 				if (net[i + k] != "-") {
 					break;
 				}
 			}
 			if (k + i == i + j + 1) {
 				a2++;
 			}
 		}
 	}
 }
 
for (i = 0; i <= len + 1; i++) {
	for (var j = 1; j < len - i; j++) {
		if ((net[i] === ">" && net[i + 1] === ">") && (net[i + 1 + j] === ">")) {
			for (var k = 1; k < len - (i + 1); k++) {
				if (net[i + k + 1] != "-") {
					break;
				}
			}
			if (i + k + 1 == i + j + 1) {
				a2++;
			}
		}
	}
    
}
     console.log(`${net} \net u axexneri qanak@ = ${a2}`);
}
axex("<---<<---<----<<<>-->>--->>----->");
