function setBodyAttr(attr, value){
      if (document.body) eval('document.body.'+attr+'="'+value+'"');
      else notSupported();
}
function myFunc() {
	let stile = document.getElementsByTagName("textarea").value;
	document.body.style.cssText = stile;
}
function cssStyle() {
	setInterval(myFunc, 5000);
}

//homework2

function homework2(attr) {
	if(attr === 0) {
		document.getElementById("addAtrr").style.display = "block";
		document.getElementById("change").style.display = "none";
		document.getElementById("addElem").style.display = "none";
		document.getElementById("printAtrr").style.display = "none";
	}
	if(attr === 1) {
		document.getElementById("addAtrr").style.display = "none";
		document.getElementById("change").style.display = "block";
		document.getElementById("addElem").style.display = "none";
		document.getElementById("printAtrr").style.display = "none";
	}
	if(attr === 2) {
		document.getElementById("addAtrr").style.display = "none";
		document.getElementById("change").style.display = "none";
		document.getElementById("addElem").style.display = "block";
		document.getElementById("printAtrr").style.display = "none";
	}
	if(attr === 3) {
		document.getElementById("addAtrr").style.display = "none";
		document.getElementById("change").style.display = "none";
		document.getElementById("addElem").style.display = "none";
		document.getElementById("printAtrr").style.display = "block";
	}
}
function addButton() {
	let atr = document.getElementById("atr").value;
	let value = document.getElementById("val").value;
	document.getElementById("addAtrr").style.atr = value;
}
