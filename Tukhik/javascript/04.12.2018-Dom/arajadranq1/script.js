
 let newStyle = function() {
	let arg = document.getElementById('domStyle').value; 
	const style = document.createElement('style');
	document.body.appendChild(style)
	style.textContent = arg;
	};

document.getElementById('myElement').onclick = function() {
    setInterval(newStyle2, 2000);
    elert("of")
}

let newStyle2 = function() {
	let arg = document.getElementById('domStyle2').value; 
	const style = document.createElement('style');
	document.body.appendChild(style)
	style.textContent = arg;
	};
