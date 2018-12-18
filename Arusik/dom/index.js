
document.getElementById("btn1").addEventListener("click", function addAtribute() {
	let param1 = document.getElementById("par1");
	let inp1_1 = document.createElement("input");
	let inp1_2 = document.createElement("input");
	let param = document.getElementById("par2");
	inp1_1.setAttribute('placeholder', "attribute");
	inp1_2.setAttribute('placeholder', "value");
	
	param.parentNode.appendChild(inp1_1);
	param.parentNode.appendChild(inp1_2);
});

document.getElementById("btn2").addEventListener("click", function changeAttribute() {
	
	let inp2 = document.createElement("input");
	let param1 = document.getElementById("par3");

	param1.parentNode.replaceChild(inp2, param1);
	
});
