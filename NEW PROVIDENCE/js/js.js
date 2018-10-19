var y = document.getElementsByClassName("s");
var input1 = document.getElementById("demo1");
var input2 = document.getElementById("demo2");
var input3 = document.getElementById("demo3");
function f1(){
    input1.style.display = "block";
    input2.style.display = "none";
    input3.style.display = "none";
    input1.classList.add("anim-left");
    y[0].style.width = "20%";
    y[1].style.width = "15%";
    y[2].style.width = "15%"; 
}
function f2(){
    input1.style.display = "none";
    input2.style.display = "block";
    input3.style.display = "none";
    input2.classList.add("anim-left");
    y[0].style.width = "15%";
    y[1].style.width = "20%";   
    y[2].style.width = "15%";              
}
function f3(){
    input1.style.display = "none";
    input2.style.display = "none";
    input3.style.display = "block";
    input3.classList.add("anim-left");
    y[0].style.width = "15%";
    y[1].style.width = "15%";   
    y[2].style.width = "20%";   
                
}