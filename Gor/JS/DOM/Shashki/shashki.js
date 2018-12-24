const size = 8
const bgColor = function(i, j) {
	if((i + j) % 2 === 0) {
		return `black`;
	} else {
		return `tarnsparent`;
	}
}
const drowTable = function() {
	document.getElementsByTagName('button')[0].style.display = 'none';
	const table = document.getElementsByTagName('table')[0];
	for(let i = 0; i < size; i++) {
		const tr = document.createElement('tr');
		table.appendChild(tr);
		for(let j = 0; j < size; j++) {
			const td = document.createElement('td');
			td.setAttribute("onclick", "game(event)");
			td.style.background = bgColor(i, j);
			tr.appendChild(td);
		}
	}
}