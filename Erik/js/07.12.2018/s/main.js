function avel(){
	// let a =
	// document.getElementsByTagName('input')[1];
	 document.getElementById("input1").style.display = "block";
	 document.getElementById("input2").style.display = "block";	
	 document.getElementById("btn").style.display = "none";
	 document.getElementById("btn1").style.display = "block";
}
function lcnel(){
// 	// document.getElementById('btn').style.display = "none";	
		
let ax =  document.getElementsByTagName("input")[0].value;
let ax1 =  document.getElementsByTagName("input")[1].value;
let ax2 =  document.getElementsByTagName("input")[2].value;
let ax3 = document.getElementsByTagName("input")[3].value;
let ax4 = document.getElementsByTagName("input")[4].value;
let ax5 = document.getElementsByTagName("input")[5].value;

let asa = document.getElementsByTagName(ax);
for (let i of asa) {
	i.setAttribute(ax1, ax2);

}
//console.log(ax, ax1, ax2);
}
function poxpox(){
	document.getElementById("inp3").style.display = "block";
	let ax = document.getElementsByTagName("input")[0].value;
	console.log(ax);
	let ax3 = document.getElementsByTagName("input")[3].value;
	document.getElementsByTagName(ax)[0].innerHTML = ax3;
	console.log(ax3)
}
function avelac(){
	document.getElementById("inp4").style.display = "block";
	let ax =  document.getElementsByTagName("input")[0].value;
	let ax4 = document.getElementsByTagName("input")[4].value;
	document.getElementsByTagName(ax)[0].innerHTML += ax4;
	console.log(ax4)

}
function atrib(){
	
	let ax =  document.getElementsByTagName("input")[0].value;
	let asa = document.getElementsByTagName(ax);
	let div = document.getElementById("div5")
	for(let tab of asa){
		for(let name of tab.getAttributeNames()){
			let value = tab.getAttribute(name);
			console.log(name, value);
			div.textContent += name  + ".-*-*-..-*-*-.." + value;
		}
	}

	
}