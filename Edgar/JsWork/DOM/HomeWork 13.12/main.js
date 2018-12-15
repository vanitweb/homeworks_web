//homework 1
let area = function(){
    let addText = document.getElementsByTagName("textarea")[0].value;
    let style = document.getElementsByTagName("style")[0];
    if(style === undefined){
        newStyle = document.createElement("style");
        document.head.appendChild(newStyle)
    }
    newStyle.textContent = addText;
    setTimeout(function(){
        newStyle.textContent = " ";
    }, 5000)
}
//homework 2

function myFunction() {
    var x = document.createElement("INPUT");
    var x1 = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("placeholder", "Attribute");
    x1.setAttribute("type", "text");
    x1.setAttribute("placeholder", "Value");
    let button = document.createElement("button");
     button.textContent = "Add"
    button.setAttribute("onclick", "click2()")
     document.body.appendChild(x);
      document.body.appendChild(x1);
      document.body.appendChild(button);
}
