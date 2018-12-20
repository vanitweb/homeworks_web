<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sea Battle game</title>
</head>
<body>
  <style>
    #battle-field-1, #battle-field-2 { width: 320px; height: 320px; float: left; margin: 10px; border: 1px dashed black; }
    .ships-line { color: grey; margin: 10px; line-height: 5px; letter-spacing: 10px; }
    #battle-field-1 .s { background: #222; }
    #battle-field-2 .s, .w { background: #eee; }
    .d { background: red; }
    .m { background: gray; }
    #battle-field-1 div, #battle-field-2 div { width: 30px; height: 30px; float: left; border: 1px solid black;}
  </style>

  <div id="battle-field-1"></div>
  <div id="battle-field-2"></div>
  <div id="output"></div>
  <button id="start">Start the game</button>

   <script>  
  window.onload = function(w, h) {
    var p1map = [],
        p2map = ['ooosooooss',
                'ososoooooo',
                'ooosoooooo',
                'ooosooosoo',
                'ooooooosoo',
                'osoosoosoo',
                'osoooooooo',
                'ososoooooo',
                'ooooossooo',
                'ssooooooso'],
        p1 = document.getElementById('battle-field-1'),
        p2 = document.getElementById('battle-field-2'),
        outputDiv = document.getElementById("output"),
        button = document.getElementById('start');
    outputDiv.innerHTML = "<p><b>Remember the ships configuration: 1 x 4, 2 x 3, 3 x 2, 4 x 1</b></p>";
    button.onclick = function () {
      button.disabled = true;
      for (var a = 0; a < w; a++) {
        var shipLine = prompt("Enter " + a + " line of your ships, where 'o' is an empty cell and 's' is a cell   with the ship", "ossoooosoo");
        p1map.push(shipLine);
        if (p1map[a] != undefined) {
          outputDiv.innerHTML += "<p class='ships-line'>" + p1map[a] + "</p>";
        }
      }

      for (i = 0; i < w; i++) for (j = 0; j < h; j++) {
        div1 = document.createElement('div');
        div1.id = i+'_'+j;
        div1.className = p1map[i][j];
        if (p1map[i][j] == 's') {
          div1.className = 's';
        } else {
          div1.className = 'w';
        }
        p1.appendChild(div1);
        div2 = document.createElement('div');
        div2.className = p2map[i][j] == 's' ? 's' : 'w';
        div2.onclick = function () { if (fire(this)) backfire(); };
        p2.appendChild(div2);
      }
    };
      function fire(el) {
        if (el.className == 'd' || el.className == 'm') return false;
        el.className = el.className == 's' ? 'd' : 'm';
        if (document.querySelectorAll('#battle-field-2 .s').length === 0) {
          alert('Victory!'); 
          return false;
        }
        if (el.className == 'm') return true;
      }
      function backfire() {
        for (i = w * h; i > 0; i--) {
          var targets = document.querySelectorAll('#battle-field-1 .s, #battle-field-1 .w');
          if (targets.length === 0 || fire(targets[Math.floor(Math.random() * targets.length)])) break;
        }
        if (document.querySelectorAll('#battle-field-1 .s').length === 0) alert('You have lost! Refresh the page to start new game.');
      }
    }(10, 10);

  </script>
</body>
</html>
