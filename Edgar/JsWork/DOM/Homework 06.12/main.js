function main() {
    let f = document.getElementById('changer').value;
    const mystyle = document.createElement('style');
    document.body.appendChild(mystyle);
    mystyle.textContent = f;
}
function myFunction() {
	setInterval(function(){
    main();
}, 5000);
};