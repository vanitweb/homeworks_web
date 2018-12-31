function BinarySearch(t,A) {
	let i = 0, j = A.length, k;                             
	while(i < j){
		k = Math.floor((i+j)/2);
		if(t <= A[k]){
			j = k;
		}      
		else {
		 i = k+1;
		}
	}
	if(A[i] === t){
		return i;	
	}
	else{
		return -1;
	}
}
console.log(BinarySearch(6, [1, 2, 3, 4, 5, 6, 7]));