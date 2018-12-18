var k = 0;
var syun = [];
const x = function() 
{
    const stugum = function()
    {
		//տողեր
		var chisht;
		for(let qanak = 1; qanak <= CELL_SIZE; qanak++)
		{
			for(let m = 0; m < CELL_SIZE; m++)
			{
				for(let n = 1; n <= CELL_SIZE; n++)
				{
					for(let i = 0 + (m * CELL_SIZE); i < n * CELL_SIZE; i++)
					{
						if(syun[i-1] != syun[i])
						{
							chisht = false;
						}
						else
						{
							chisht = true;
						}
					}
				}
			}
		}
		//սյուներ
		for(let qanak = 0; qanak < CELL_SIZE; qanak++)
		{
			for(let i = qanak; i <= ((CELL_SIZE-1)*CELL_SIZE)+1; i = i+CELL_SIZE)
			{
				if(syun[i-1] != syun[i])
				{
					chisht = false;
				}
				else
				{
					chisht = true;
				}
			}
		}
		//անկյունագծեր

		for(let i = 0; i < CELL_SIZE; i = i+(CELL_SIZE+1))
		{
			if(syun[i-1] != syun[i])
			{
				chisht = false;
			}
			else
			{
				chisht = true;
			}
		}

		for(let i = CELL_SIZE-1; i < CELL_SIZE * (CELL_SIZE - 1); i = i +(CELL_SIZE-1))
		{
			if(syun[i-1] != syun[i])
			{
				chisht = false;
			}
			else
			{
				chisht = true;
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
			e.target.textContent = isX ? 'X' : '0';
			isX = !isX;
          /* ?????????????? if(isX === true)
                {
                    syun[count-1] = 1;
                }
            else
            {
                syun[count-1] = 0;
            }????????????????*/
             
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
    let size = document.getElementById("input").value;
    CELL_SIZE = size;
    
    syun.length = CELL_SIZE*CELL_SIZE;
	const table = document.getElementsByTagName('table')[0];
	for(let i = 0; i < CELL_SIZE; ++i)
    {
		const tr = document.createElement('tr');
        for(let j = 0; j < CELL_SIZE; ++j)
        {
            const td = document.createElement('td');
            
            tr.appendChild(td);
            td.setAttribute('onclick', 'setValue(event)');
            table.appendChild(tr);
            syun[i] = td; //vercnum e 1in ev 2rd vandaknery!!!
        }
	}
}


const startGame = function ()
{
    drawTable();
}