//Task 3. Change even and old index of array elenemts
let a = [1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2];
let c = [];
c[0] = a[1];
let n = a.length;
	for (let i = 0; i < n-1; ++i) {
		c[i+1] = a[i];
}
console.log (c);