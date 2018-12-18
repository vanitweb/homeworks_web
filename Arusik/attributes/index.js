/*
const addAttribute = function() {}
const changeContent = function() {}
const addContent = function() {}
const printAttribute = function() {}
*/

let mySelect = document.getElementById('mySelect');
let btn = document.createElement('button');
const clickMe = document.createTextNode('Click Me');
function changeProperties() {
	
	document.body.appendChild(btn);
	btn.appendChild(clickMe);
}
let input = document.createElement('input');

