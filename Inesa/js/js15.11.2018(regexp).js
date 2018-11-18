//tarberak 1
let str="gg10(){blb()lblbl}[]00";
let arr = str.split('');
for(let i = 0; i < arr.length; i = i + 1)
{
	if (arr[i] =="(") ||  (arr[i] =="[") || (arr[i] =="{")
		{
			let p = i;//verjin p-n klini ayn pakagci hascen vory verjinn e
		}
	for(let i = p; i < arr.length; i++)
	{
		if (arr[i] ==")") ||  (arr[i] =="]") || (arr[i] =="}")
			{
				delete arr[p];
				delete arr[i];
			}
		continue;
	}
}

//tarberak 2
let str="gg10(){blb()lblbl}[]00";
let arr = str.split('');
for(let i = 0; i < arr.length; i = i + 1)
{
	if (arr[i] =="(") 
	{
		str = RegExp("("+
		"[\(][0-9A-Fa-f]{32}[\)]|"+
		"[\{][0-9A-Fa-f]{32}[\}]|"+
		"[\[][0-9A-Fa-f]{32}[\]]|"+
		"<[0-9A-Fa-f]{32}>|"+
		"[0-9A-Fa-f]{32})"+
		")");
	}
	if (arr[i] =="{") 
	{
		str = RegExp("{"+
		"[\(][0-9A-Fa-f]{32}[\)]|"+
		"[\{][0-9A-Fa-f]{32}[\}]|"+
		"[\[][0-9A-Fa-f]{32}[\]]|"+
		"<[0-9A-Fa-f]{32}>|"+
		"[0-9A-Fa-f]{32})"+
		"}");
	}
	if (arr[i] =="{") 
	{
		str = RegExp("["+
		"[\(][0-9A-Fa-f]{32}[\)]|"+
		"[\{][0-9A-Fa-f]{32}[\}]|"+
		"[\[][0-9A-Fa-f]{32}[\]]|"+
		"<[0-9A-Fa-f]{32}>|"+
		"[0-9A-Fa-f]{32})"+
		"]")
	}
};














