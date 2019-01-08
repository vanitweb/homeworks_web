
 'use strict';

let tbl = document.getElementsByTagName("table")[0];
let cellIndexClick1;
let rowIndexClick1;
let cellIndexClick2;
let rowIndexClick2;
let classNameLeftClick;
let upCellRight;
let upCellLeft; 
var nextUpCellLeft;
var nextUpCellLeft2; 
var nextUpCellRight2;  
var nextUpCellRight;
let upCellRight2; 
let upCellLeft2; 
let className;
let counter = 1;
let counterRightClick = 1;
let black = 12,  white = 12;
let cellNumLeftClick, cellNumRightClick;
let nextUpCellRightJ;
let nextUpCellRightI;
let qanakElem;
let nextUpCellLeftI;
let k;
const tamaBlack = function(){
    if(rowIndexClick2 == 0){
           document.getElementsByTagName("div")[cellNumRightClick].className = 'circleBlackTama';
    } 
}

const tamaWhite = function(){
    if(rowIndexClick2 == 7){
           document.getElementsByTagName("div")[cellNumRightClick].className = 'circleWhiteTama';
    } 
}

const funcRef = function(e){
    let cell = e.target;
    cellIndexClick2 = parseInt(cell.cellIndex);
    rowIndexClick2 = parseInt(cell.parentNode.rowIndex);
    cellNumRightClick = cellIndexClick2 +  rowIndexClick2 * 8;
    if (counterRightClick % 2 != 0 ){
        upCellLeft = cellIndexClick1 - 1 + (rowIndexClick1+1) * 8;
        upCellRight = cellIndexClick1+1 +  (rowIndexClick1+1) * 8;

        if( cellNumRightClick === upCellLeft || cellNumRightClick === upCellRight){
            if(document.getElementsByTagName("div")[cellNumRightClick].className === ''){
                document.getElementsByTagName("div")[cellNumLeftClick].className = '';
                document.getElementsByTagName("div")[cellNumRightClick].className = 'circleWhite';

                tamaWhite();
                
                ++counterRightClick;
                ++counter;
            }
            else {
                alert("Սխալ քայլ 0");
            }
        }
        else {
            nextUpCellLeft = cellIndexClick1 - 2 + (rowIndexClick1+2) * 8 ;
            if(cellNumRightClick === nextUpCellLeft) {
                if(document.getElementsByTagName("div")[upCellLeft].className === 'circleBlack' ||
                    document.getElementsByTagName("div")[upCellLeft].className === 'circleBlackTama'){
                    document.getElementsByTagName("div")[upCellLeft].className = '';
                    document.getElementsByTagName("div")[cellNumLeftClick].className = '';
                    document.getElementsByTagName("div")[cellNumRightClick].className = 'circleWhite';
                    
                    tamaWhite();
                    
                    ++counterRightClick;
                    ++counter;
                    black = black -1;
                    console.log(black);
                    if(black == 0){
                        alert("Հաղթեց սպիտակ քարերով  խաղացողը");
                    }
                }
            }
            else {
                nextUpCellRight = cellIndexClick1+2 +  (rowIndexClick1+2) * 8;
                if(cellNumRightClick === nextUpCellRight){
                    if(document.getElementsByTagName("div")[upCellRight].className === 'circleBlack' ||
                    document.getElementsByTagName("div")[upCellRight].className === 'circleBlackTama'){
                        document.getElementsByTagName("div")[upCellRight].className = '';
                        document.getElementsByTagName("div")[cellNumLeftClick].className = '';
                        document.getElementsByTagName("div")[cellNumRightClick].className = 'circleWhite';
                        
                        tamaWhite();

                        ++counterRightClick;
                        ++counter;
                        black = black -1;
                        console.log(black);
                        if(black == 0){
                            alert("Հաղթեց սպիտակ քարերով  խաղացողը");
                        }
                    }
                }
                else alert('Սխալ քայլ1'); 
            }  
            }
        }
		
		
		
		
		
		


else {
if(classNameLeftClick.className == "circleBlack" ){
 upCellLeft2 = cellIndexClick1 - 1 + (rowIndexClick1-1) * 8;
 upCellRight2 = cellIndexClick1+1 +  (rowIndexClick1-1) * 8;
 if( cellNumRightClick === upCellLeft2 || cellNumRightClick === upCellRight2){
   if(document.getElementsByTagName("div")[cellNumRightClick].className === ''){
     document.getElementsByTagName("div")[cellNumLeftClick].className = '';
     document.getElementsByTagName("div")[cellNumRightClick].className = 'circleBlack';
      tamaBlack();
      ++counterRightClick;
      ++counter;
   }
   else {
     alert("Սխալ քայլ 2");
   }
 }
 else {
   nextUpCellLeft2 = cellIndexClick1 - 2 + (rowIndexClick1-2) * 8;
   if(cellNumRightClick === nextUpCellLeft2) {
    if(document.getElementsByTagName("div")[upCellLeft2].className === 'circleWhite' ||
      document.getElementsByTagName("div")[upCellLeft].className === 'circleWhiteTama'){
      document.getElementsByTagName("div")[upCellLeft2].className = '';
      document.getElementsByTagName("div")[cellNumLeftClick].className = '';
      document.getElementsByTagName("div")[cellNumRightClick].className = 'circleBlack';
      tamaBlack();
      ++counterRightClick;
      ++counter;
      white = white -1;
      console.log(white);
        if(white == 0){
           alert("Հաղթեց կարմիր քարերով  խաղացողը");
        } 
    }
   }
   else {
     nextUpCellRight2 = cellIndexClick1+2 +  (rowIndexClick1-2) * 8;
     if(cellNumRightClick === nextUpCellRight2){
        if(document.getElementsByTagName("div")[upCellRight2].className === 'circleWhite' ||
                    document.getElementsByTagName("div")[upCellLeft].className === 'circleWhiteTama'){
           document.getElementsByTagName("div")[upCellRight2].className = '';
            document.getElementsByTagName("div")[cellNumLeftClick].className = '';
                        document.getElementsByTagName("div")[cellNumRightClick].className = 'circleBlack';

                        tamaBlack();

                        ++counterRightClick;
                        ++counter;
                        white = white -1;
                        console.log(white);
                        if(white == 0){
                            alert("Հաղթեց կարմիր քարերով  խաղացողը");
                        }
                    }
                }
   }
 }
}
else {
    
       if (classNameLeftClick.className == "circleBlackTama" ) {
            if (rowIndexClick1-rowIndexClick2==0){
                alert ('nuyn texum mi sexmeq');
               
			}
             else {
				if(Math.abs(rowIndexClick1-rowIndexClick2)===1){
			 
		if(rowIndexClick1<rowIndexClick2){	 
       upCellLeft = cellIndexClick1-1  + (rowIndexClick1+1) * 8;
       upCellRight = upCellLeft + 2;

        if( cellNumRightClick === upCellLeft || cellNumRightClick === upCellRight ){
            if(document.getElementsByTagName("div")[cellNumRightClick].className === ''){
                document.getElementsByTagName("div")[cellNumLeftClick].className = '';
                document.getElementsByTagName("div")[cellNumRightClick].className = 'circleBlackTama';

                tamaWhite();
                
                ++counterRightClick;
                ++counter;
				
            }
            else {
                alert("Սխալ քայլ 0");
            }
        }
		else {
                alert("Սխալ քայլ 0000");
            }
	   }
	   
	   else{	 
       upCellLeft = cellIndexClick1 - 1 + (rowIndexClick1-1) * 8;
        upCellRight = cellIndexClick1+1 +  (rowIndexClick1-1) * 8;

        if( cellNumRightClick === upCellLeft || cellNumRightClick === upCellRight){
            if(document.getElementsByTagName("div")[cellNumRightClick].className === ''){
                document.getElementsByTagName("div")[cellNumLeftClick].className = '';
                document.getElementsByTagName("div")[cellNumRightClick].className = 'circleBlackTama';

                tamaWhite();
                
                ++counterRightClick;
                ++counter;
            }
            else {
                alert("Սխալ քայլ 0");
            }
        }
		else {
                alert("Սխալ քայլ 111");
            }
	   }
				}
		
		
	else {
		if(Math.abs(rowIndexClick1-rowIndexClick2)>1){
	if(document.getElementsByTagName("div")[cellNumRightClick].className != ''){
		alert("sxal e, datark element chi");
	}
	else {
			
								if(rowIndexClick1 < rowIndexClick2){
									qanakElem=0;
									for(let i = 1; i <= rowIndexClick2; i++){
										
                                                nextUpCellRightI = cellIndexClick1 + i + (rowIndexClick1 +i) * 8;
												nextUpCellLeftI = cellIndexClick1 - 1 + (rowIndexClick1+1) * 8;
												
													if(document.getElementsByTagName("div")[nextUpCellRightI].className === 'circleBlack' || 
                                            document.getElementsByTagName("div")[nextUpCellRightI].className === 'circleBlackTama'){
														
                                        alert ("sxal e sev element ka");
                                        break;
                                    }
                                            
                                    
												
                                       else {
										   if(document.getElementsByTagName("div")[nextUpCellRightI].className === 'circleWhite' ||
                                             document.getElementsByTagName("div")[nextUpCellRightI].className === 'circleWhiteTama') {
                                               k = nextUpCellRightI;
                                            ++qanakElem;
                                        if(qanakElem > 1) {
                                                alert('sxal qayl 2 hat spitak qar');
                                                
                                                
                                            }
											 }
									   }
												
								}
								if(qanakElem <= 1){
									if(qanakElem == 0) {
                document.getElementsByTagName("div")[cellNumLeftClick].className = '';
                document.getElementsByTagName("div")[cellNumRightClick].className = 'circleBlackTama';
                 ++counterRightClick;
                                    ++counter;
									
                            }
							else {
								 document.getElementsByTagName("div")[k].className = '';
								 document.getElementsByTagName("div")[cellNumLeftClick].className = '';
                                    document.getElementsByTagName("div")[cellNumRightClick].className = 'circleBlackTama';
                                    
                                
                                    ++counterRightClick;
                                    ++counter;
                                    white = white -1;
                                    console.log(white);
                                    if(white == 0){
                                        alert("Հաղթեց կարմիր քարերով  խաղացողը");
                                    }
								
								
								
							}
									
								}
								
								
								
								
							}
							
			}
		}
	}
	   }
	 }
	 }
}
}




                       

window.oncontextmenu = funcRef;

function alertRowCellClick1 (e) {
    if (!e.target.textContent){
        let cell = e.target;
        cellIndexClick1 = parseInt(cell.cellIndex);
        rowIndexClick1 = parseInt(cell.parentNode.rowIndex);
        cellNumLeftClick = cellIndexClick1 +  rowIndexClick1 * 8; 

        if (counter% 2 != 0 ){
            classNameLeftClick = document.getElementsByTagName("div")[cellNumLeftClick];
            if(classNameLeftClick.className === "circleBlack" || classNameLeftClick.className === '' || classNameLeftClick.className === "circleBlackTama"){
                alert('սպիտակ քարերով խաղացողի հերթն է');
            }
            if(classNameLeftClick.className === "circleWhite" ) {
                window.oncontextmenu = funcRef;
            }
            if(classNameLeftClick.className === "circleWhiteTama" ) {
                window.oncontextmenu = funcRef;
            } 
        }
        else {
            classNameLeftClick = document.getElementsByTagName("div")[cellNumLeftClick];
            if(classNameLeftClick.className === "circleWhite" || classNameLeftClick.className === '' || classNameLeftClick.className === "circleWhiteTama"){
                alert('կարմիր քարերով խաղացողի հերթն է');
            }
            if(classNameLeftClick.className === "circleBlack" ) {
                 window.oncontextmenu = funcRef;
            }
            if(classNameLeftClick.className === "circleBlackTama" ) {
                window.oncontextmenu = funcRef;
            } 
        }
    }
   else alert('Սխալ դաշտ');  
}
tbl.addEventListener("click", alertRowCellClick1);



        

