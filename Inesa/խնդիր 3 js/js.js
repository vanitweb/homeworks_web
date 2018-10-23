var a = [33, 6, 7, 8, 9, 55, 95, 69];
for(var i = 0; i < 8; i++)
{
	if (a[i] > a[i+1])
		{
			var temp = a[i];
			a[i] = a[i+1];
			a[i+1] = temp ; 
		}
		else{}
}
console.log(a);
