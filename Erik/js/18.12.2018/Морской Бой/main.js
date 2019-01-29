
let table = document.getElementsByTagName("table")[0];
function fun(){
	table.setAttribute("border", 1);
	table.setAttribute("cellspacing", 0);
	for (let i = 0; i < 10; i++){
		var tr = document.createElement("tr");
		table.appendChild(tr);
	for (let j = 0; j < 10; j++){
		let td = document.createElement("td");
		td.setAttribute("onclick", "krakel(event)");
		tr.appendChild(td);
	}
}
}
fun();

let skizb = 0;
function krakel(naver){
    // naver.target.textContent = "krak";
    naver.target.setAttribute("class", "raketo");
  	skizb++;
  	sharel(naver);

}

function sharel(naver){
	let tdi = document.getElementsByTagName("td");
	let texer = [];
	for (let i in tdi){
		 if(tdi[i] === naver.target){
	        console.log(i)
	    }
	}
	//while(naver--){
	//texer[naver] === 
	//}

}
sharel();
