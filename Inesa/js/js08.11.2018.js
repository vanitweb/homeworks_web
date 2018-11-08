//xndir 1 Grqer  ???
function girq (a)
{
	let obj = {girq1:{hexinak:"Francis Scott Key Fitzgerald",vernagir:"Tender Is the Night",kch:false}, girq2:{hexinak:"blblb",vernagir:"Մարտ համար հինգ ",kch:false} , girq3:{hexinak:" Ջորջ Օրուել ",vernagir:"1984",kch:true}} ;                        
	if(a)
	{
		console.log(obj[vernagir]);
	}
	else
	{
		console.log(obj[vernagir]);
	}	
}
console.log("True arjeqi depqum");
girq(true);
console.log("False arjeqi depqum");
girq(false);


//xndir 2 function tarberutyun

function ob_tarb(obj1,obj2)
{
	for(i in obj1)
	{
		for(j in obj2)
		{
			if(i === j)
			{
				if(obj1[i] === obj2[j])
				{
					console.log("---");
				}
			
				else
				{
					console.log("Tarberutyunner");
					console.log(obj1[i]);
					console.log(obj2[j]);
					//let obj {obj1:i , obj2:j};
				}
			}
		}
	}
	//console.log(obj);
}
 ob_tarb({a: 2, b: 2, d : 5}, {a: 2, b: 2, d : 1});

 
 
 
//xndir 3 texapoxel key ev value 

function texapoxum(key , value)
{
	let b;
	value = b;
	key = value;
	b = key;
	let obj1 = {key:value};
	console.log(obj1);
}
texapoxum(A , B);














