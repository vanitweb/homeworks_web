var k = 0;
var syun = [];
        
var x = function() 
{
	
    const stugum = function()
    {
        
		var CELL_SIZE;
		var size = document.getElementById("input").value;
		CELL_SIZE = size;
		syun.length = CELL_SIZE * CELL_SIZE;
        syun = document.getElementsByTagName("td");
		//տողեր
		var chisht;
		for(let qanak = 0; qanak < ((CELL_SIZE * CELL_SIZE) - 3); qanak++)
		{
			for(let i = 0; i <= CELL_SIZE; i = i + 3)
			{
				if(syun[qanak + i].textContent === "X" && syun[qanak + i+1].textContent === "X" && syun[qanak + i+2].textContent === "X")
				{
					chisht = true;
				}
				else
				{
					chisht = false;
				}
			}
		}
		//սյուներ
		for(qanak = 0; qanak <= CELL_SIZE; qanak++)
		{
			for(let i = qanak; i < (CELL_SIZE * CELL_SIZE); i += CELL_SIZE)
			{
				if(syun[i].textContent === "X" &&  syun[i+CELL_SIZE] === "X" && syun[i + CELL_SIZE + CELL_SIZE] === "X")
				{
					chisht = true;
				}
				else
				{
					chisht = false;
				}
			}
		}
		//անկյունագծեր
		for(i = 0; i <= syun.length; i += CELL_SIZE+1)//glxavor ankyunagic
		{
			if(syun[i].textContent ==="X" && syun[CELL_SIZE+1] === "X" && syun[CELL_SIZE + CELL_SIZE] === "X") 
			{
				chisht = true;
			}
			else
			{
				chisht = false;
			}
		}
		for(i = CELL_SIZE; i <= syun.length; i += CELL_SIZE - 1)//erkrordakan ankyunagic
		{
			if(syun[i].textContent ==="X" && syun[i + CELL_SIZE - 1] === "X" && syun[i + CELL_SIZE + CELL_SIZE - 2] === "X") 
			{
				chisht = true;
			}
			else
			{
				chisht = false;
			}
		}
		if(chisht = true)
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
	var CELL_SIZE;
    var size = document.getElementById("input").value;
    CELL_SIZE = size;
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