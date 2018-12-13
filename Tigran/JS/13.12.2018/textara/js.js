const css = function(){
    let text = document.getElementsByTagName("textarea")[0].value;
    let style = document.getElementsByTagName("style")[0];
    if(style === undefined){
        style1 = document.createElement("style");
        document.head.appendChild(style1)
    }
    style1.textContent = text;
    setTimeout(function(){
        style1.textContent = "";
    }, 5000)
}