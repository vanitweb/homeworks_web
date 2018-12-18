let chap = parseFloat(prompt());
let table = document.getElementsByTagName("table")[0];
function fun() {
  table.setAttribute("border", 4);
  table.setAttribute("cellspacing", 0)
  for (let i = 0; i < chap; i++) {
    let trner = document.createElement('tr');
    table.appendChild(trner);

  for (let j = 0; j < chap; j++) {
    let tdner = document.createElement('td');
    tdner.setAttribute("onclick", "xo(event)");
    // tdner.onclick = xo;
    trner.appendChild(tdner);
  }
}
document.getElementById("btn").style.display = "none";
}
let skizb = 0;
function xo(e){
  if (!e.target.textContent) {
  if(skizb % 2 === 0){
    e.target.textContent = "X";
  }
  else{
    e.target.textContent = "O";
  }
  skizb++; 
  }
  if(skizb >= chap * 2 - 1) {
  	stugel(e);
  }
}
function stugel(e){
	let tdi = document.getElementsByTagName("td");
	let horizon,
		vertikal;
	let counthorizon = 0;
	let countvertikal = 0;
	let countankyun1 = 0;
	let countankyun2 = 0;
	for (let i in tdi){
		 if(tdi[i] === e.target){
	        horizon = parseInt(i/chap);
	        vertikal = i - horizon * chap;
	    }
	}
	for (let i = horizon * chap ; i < (horizon + 1) * chap; i++ ){
		if(tdi[i].textContent === e.target.textContent){
			counthorizon++;
		}
	}
	 if(counthorizon === chap){
		alert(`haxtec ujexaguyn  ${e.target.textContent}`);
		document.getElementById("btn1").style.display = "block";
		}
	 for (let i = vertikal; i < tdi.length; i += chap){
	 	if(tdi[i].textContent === e.target.textContent){
	 		countvertikal++;
	 	}
	 }
	 if(countvertikal === chap){
	 	alert(`haxtec ujexaguyn  ${e.target.textContent}`)
	 }
	 for(let i = 0; i < tdi.length; i += chap){
	 	let j = i / chap;
 	  	if(tdi[i + j].textContent === e.target.textContent){
            countankyun1++;
        }
	 }
	 if(countankyun1 === chap){
	 	alert(`haxtec ujexaguyn ${e.target.textContent}`)
	 }
	  for(let i = chap; i <= tdi.length; i += chap){
        let j = i / chap;
        if(tdi[i - j].textContent === e.target.textContent){
            countankyun2++;
        }
    }
    if(countankyun2 === chap){
         alert(`haxtec ujexaguyn ${e.target.textContent}`)
    }
}
 const nor = function(){
 	let tdn = document.getElementsByTagName("td");
 	for(let i = 0; i < tdn.length; i++){
 		tdn[i].textContent = "";
 	}
 }