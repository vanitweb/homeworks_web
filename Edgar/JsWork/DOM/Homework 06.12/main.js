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

setInterval(function(){
    if(document.getElementsByTagName("textarea")[0].value){
        setTimeout(function(){
            let text = document.getElementsByTagName("textarea")[0].value;
            let style = document.getElementsByTagName("style")[0];
            style.textContent = text;
        },5000)
    } 
},1000)