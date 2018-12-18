var k = 0;

const x = function() 
{
	const stugum = function()
    {
		let syun = document.getElementsByTagName("td");
		let size = parseInt(document.getElementById("input").value);
		let CELL_SIZE = size;
		let chisht = false;
		let maxSize = CELL_SIZE * CELL_SIZE;
		//գլխավոր անկյունագիծ
		for(let i = 0; i <= maxSize; i += (CELL_SIZE+1))
		{
			if((syun[i].textContent === "X") && ((syun[i + (CELL_SIZE+1)]).textContent === "X") && (syun[i + CELL_SIZE + CELL_SIZE + 2].textContent === "X"))
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
				if((syun[i].textContent === "X") && (syun[i + CELL_SIZE].textContent === "X") && (syun[i + CELL_SIZE + CELL_SIZE].textContent === "X"))
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
		if(chisht === true)
		{
			alert("հաղթանակ");
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
    let size = parseInt(document.getElementById("input").value);
    let CELL_SIZE = size;
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
	let syun = document.getElementsByTagName("td");
}
const startGame = function ()
{
    drawTable();
}














