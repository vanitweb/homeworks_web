/*avelacnel textArea, ira mej inch grenq css content orinak, inqy 5 vrk heto kirari ed grac stayly*/



function myFunction() {
    document.getElementById("block1").style.background = "magenta";
    document.getElementById("block2").style.background = "blue";
    document.getElementById("block3").style.background = "orangered";
    document.getElementById("block4").style.background = "lightblue";
}

const buttonElement = document.getElementById('blockText');

// Add a handler for the 'click' event by providing a callback function.
// Whenever the element is clicked, a pop-up with "Element clicked!" will
// appear.
function myFunction2() {
buttonElement.addEventListener('click', function (event) {
  alert('Element clicked through function!');
})
    }