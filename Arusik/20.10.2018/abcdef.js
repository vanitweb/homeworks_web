//տրված տեքստային տարրեր պարունակող զանգվածը դասավորել հակառակ 
var a=['a','b','c','d','e','f'];
var m;
var b=[];

for (let i=0; i<6; i++){
	m=a[i];
	b[i]=a[5-i];
	a[5-i]=m;

}
for (let i=0; i<6; i++){
	
	console.log(b[i]);
}
