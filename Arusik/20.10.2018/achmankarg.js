//տրված զանգվածը դասավորել աճման կարգով 
var a=[5,8,2,3,4,1,9,8,2,10];
var min;
for (let i=0; i<10; i++){
	
	for (var j=i+1; j<10; j++){
		if (a[i]>=a[j]){
			min=a[i];
			a[i]=a[j];
			a[j]=min;
		}
	}
		console.log(a[i]);
		
}