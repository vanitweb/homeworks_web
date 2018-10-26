function showf(n,n1,step){
	const arr = [];
	let i,j;
	for(i = 0, j = n; i <=n1/step-1; i++, n+= step){
		
		arr[i] =[n];
	}
	console.log(arr);
}

showf(1,10,2);