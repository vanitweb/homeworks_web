var qanak ;
var a = 0;
var b = 1;
var c ;
c = a + b;
console.log(a);
console.log(b);
console.log(c);
for (qanak = 1; qanak < 100; qanak++)
{
	console.log(c);
	a = b;
	b = c;
	c = a + b;
}