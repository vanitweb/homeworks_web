function f(tiv1,tiv2,qayl) {
	let masiv = [];
	while(tiv1<tiv2){
		tiv1+= qayl;
		if (tiv1<tiv2) {
			masiv.push(tiv1);
		}
	}
	console.log(masiv);
	return masiv;
}
function gumar(){
	let gumary = 0;
	for (var i = 0; i < masivni.length; i++) {
		gumary += masivni[i];
	}
	console.log(gumary);
}
let masivni = f(1,100,3);
gumar();


//                                                  neter


function neter(x){
    let hat = 0;
    for(let q = 0;q < x.length; q++){
        for(let j = 0; j < x.length - q ; j++){
            if(x[q] === "<" && x[q+j +1] === "<" && x[q+j +2] === "<"){
                let g;
                for(g = 1; g < x.length - q; g++){
                    if(x[q + g] !== "-"){
                        break; 
                    }
                   // console.log(q,j);
                }
               	// console.log(g,q,j);
                if(g + q === q + j +1){
                    hat++;
                }
            }
        }
        for(let j = 1; j < x.length; j++){
            if(x[q] === ">" && x[q + 1] === ">" && x[q + 1 + j] === ">"){
                let g;
                for(g = 1; g < x.length -(q + 1); g++){
                    if(x[q + 1 + g] !== "-"){
                        break; 
                    }
                   // console.log(q+1,q+1+j,g);
                }
                // console.log(q+1,q+1+j,g);
                if(g + q +1 == q + j +1){
                    hat++;
                }
            }
        }
    }
    return hat;
}

console.log( "<-<<>---<--<<>-->","naeteri qanak@",neter("<-<<>---<--<<>-->"));
