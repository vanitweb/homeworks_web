let arr = [];
for(let i=0; i<8; i++) {
    arr[i] = [];
    for(let j=0; j<8; j++) {
       if ((i+j)%2 == 0) {
       	arr[i][j] = '*';
       } else { 
       arr[i][j] = '#';
       }
    }
}console.log(arr)


let array = [];
for(let i=0; i<8; i++) {
    array[i] = [];
    for(let j=0; j<8; j++){
    	if (i==j || (i+j)==7) {
        array[i][j] = 1;
    	}
    	else if ((i<j && (i+j)<=6) || (i>j && (i+j)>=8)) {
    		array[i][j] = 0
    	}
    	else{array[i][j] = 2
    	} 
    }
}console.log(array)
