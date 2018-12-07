function setBodyAttr(attr, value){
      if (document.body) eval('document.body.'+attr+'="'+value+'"');
      else notSupported();
}
function cssStyle() {
	console.log(document.getElementById("text"));
	setInterval(myFunction, 5000);
	function myFunction() {
		document.body.style.cssText = style;
		console.log(style);
	}
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