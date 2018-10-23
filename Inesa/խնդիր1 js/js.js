var array1 = ["A","B","C","D","E","F"];
var i,j;
var array2 =  Array(6);
for (i = 6; i >= 0; i--)
{
	for(j = 1; j <= 6; j++)
	{
		array2[j] = array2[i];
	}
}
Console.log(array2);
