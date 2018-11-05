//xndir1
let a,b,c;
let array=[];
array[0] = a;
function func(a, b, c)
{
	for(i = 1, len = array.length; i <= len; i++)
	{
		array[i] = array[i - 1] + c;
		if(a[array.length] <= b)
		{
			break
		}
	}
	return array[];
}
console.log(func(1, 8, 2));
//xndir2 >->> <<-<
var a = [];
let qanak = 0;
function func(a)
{
	for(let i = 1; i <= a.length; i++)
	{
		if(a[i] == ">->>")||(a[i] == "<<-<")
		{
			qanak += 1;
		}
	}
}
console.log(func([">->>"; "<<-<"; ">>>"; "<><>"; ">->>"]));
