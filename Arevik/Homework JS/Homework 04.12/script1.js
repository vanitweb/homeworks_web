let textArea = document.getElementById('text');
textArea.addEventListener('click', start);
alert(textArea.innerHTML);


function start() {
	window.setTimeout(func, 5000);
}
function func() {
	let p = document.getElementById('par');
	let h3 = document.getElementById('head');
	p.style.cssText= textArea.innerHTML;
	console.log(textArea.innerHTML);
}
