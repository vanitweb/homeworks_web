 setInterval(function(){
                       let arg = document.getElementById('domStyle').value; 
                       const style = document.createElement('style');
					    document.body.appendChild(style)
                       style.textContent = arg;
                       }, 5000);


