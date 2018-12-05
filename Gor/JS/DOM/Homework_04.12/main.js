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