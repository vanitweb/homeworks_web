var k = 0;
const x = function() 
{
	const stugum = function()
    {
		syun = document.getElementsByTagName("td");
		let chisht = false;
		size = parseInt(document.getElementById("input").value);///sranq stex grelem vorovhetev et popoxakannery cher gtnum... 
		CELL_SIZE = size;
		let maxSize = CELL_SIZE * CELL_SIZE;
		//գլխավոր անկյունագիծ
		for(let i = 0; i <= maxSize; i += (CELL_SIZE+1))
		{
			if((syun[i].textContent === "X") && (syun[i + (CELL_SIZE+1)].textContent === "X") && (syun[i + CELL_SIZE + CELL_SIZE + 2].textContent === "X"))
			{
				chisht = true;
			}
		}
		//2րդ անկյունագիծ
		for(let i = CELL_SIZE - 1; i <= (maxSize - CELL_SIZE) ; i += (CELL_SIZE-1))
		{
			if((syun[i].textContent === "X") && (syun[i + (CELL_SIZE - 1)].textContent === "X") && (syun[i + (CELL_SIZE - 1) + (CELL_SIZE - 1)].textContent === "X"))
			{
				chisht = true;
			}
		}
		//սյուն
		for(j = 0; j < (CELL_SIZE - 1); j++)
		{
			for(i = j; i <= (maxSize - CELL_SIZE); i += CELL_SIZE)
			{
				if((syun[i].textContent === "X") && (syun[i + CELL_SIZE].textContent === "X") && (syun[i + CELL_SIZE + CELL_SIZE].textContent/*stex asuma textContent chi karum dni bayc verevum es CELL_SIZE-in tvelem parseInt*/ === "X"))
				{
					chisht = true;
				}
			}
		}
		//տող
		for(j = 0; j <= (maxSize - CELL_SIZE); j += CELL_SIZE)
		{
			for(i = j; i <= j + (CELL_SIZE - 1); i++)
			{
				if((syun[i].textContent === "X") && (syun[i + 1].textContent === "X") && (syun[i + 2].textContent === "X"))
				{
					chisht = true;
				}
			}
		}
		if(chisht = true)
		{
			alert("հաղթանակ");//shat depqerum 5rd qaylic heto talisa haxtanak bayc chpiti tar....
		}
    }
	let count = 0;
	let isX = true;
	return function(e)
    {
		if (!e.target.textContent) 
        {
			count++;
			e.target.textContent = isX ? 'X' : 'O';
			isX = !isX;   
		}
        if(count >= 5)
        {
            stugum();
        }
	}
}
const setValue = x();
const drawTable = function() //նկարել
{
    var size = parseInt(document.getElementById("input").value);
    var CELL_SIZE = parseInt(size);
	const table = document.getElementsByTagName('table')[0];
	for(let i = 0; i < CELL_SIZE; ++i)
    {
		const tr = document.createElement('tr');
		table.appendChild(tr);
        for(let j = 0; j < CELL_SIZE; ++j)
        {
            const td = document.createElement('td');
            tr.appendChild(td);
            td.setAttribute('onclick', 'setValue(event)');
        }
	}
}
const startGame = function ()
{
    drawTable();
}














