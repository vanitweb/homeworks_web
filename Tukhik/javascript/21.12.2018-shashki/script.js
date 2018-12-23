
 'use strict';

let tbl = document.getElementsByTagName("table")[0];
let cellIndexClick1;
let rowIndexClick1;
let cellIndexClick2;
let rowIndexClick2;
let vandakiHamar = 0;
let veryeviToxAj = 0;
let veryeviToxDzax = 0;
let className;
function alertRowCellClick1 (e) {
    if (!e.target.textContent){
        let cell = e.target;
        //console.log( cell.cellIndex + ' : ' + cell.parentNode.rowIndex );
        cellIndexClick1 = parseInt(cell.cellIndex);
        //console.log(cellIndexClick1);
        rowIndexClick1 = parseInt(cell.parentNode.rowIndex);
        //console.log(rowIndexClick1);
        vandakiHamar = cellIndexClick1 +  rowIndexClick1 * 8 ;
        veryeviToxDzax = cellIndexClick1 - 1 + (rowIndexClick1+1) * 8 ;
        veryeviToxAj = cellIndexClick1+1 +  (rowIndexClick1+1) * 8 ;
        //console.log(veryeviToxDzax);
        //console.log(veryeviToxAj);
        className = document.getElementsByTagName("div")[vandakiHamar].className;

        if(className === 'circleBlack' || className === ''){
            alert('xax@ sksum en spitakner@');
        }
        else alertRowCellClick2(e);
    }
else alert('ays dashtum chen xaxum');
}
tbl.addEventListener("click", alertRowCellClick1);

const alertRowCellClick2 =    function(e) {
        if (!e.target.textContent){
            let cell = e.target;
            if ( cell.cellIndex >= 0 ){
                cellIndexClick2 = parseInt(cell.cellIndex);
                //console.log(cellIndexClick2);
                rowIndexClick2 = parseInt(cell.parentNode.rowIndex);
                //console.log(cellIndexClick2);
            }
        }
}




// function alertRowCellClick2 (e) {
//   var cell = e.target;
//   if ( cell.cellIndex >= 0 )
//     console.log( cell.cellIndex + ' : ' + cell.parentNode.rowIndex );
// cellIndexClick2 = parseInt(cell.cellIndex)+1;
// console.log(cellIndexClick2);
// rowIndexClick2 = parseInt(cell.parentNode.rowIndex)+1;
// console.log(rowIndexClick2);
// }

 
 // tbl.addEventListener("click", alertRowCellClick2);

// if (document.getElementsByTagName("td")[0].textContent === ''){
//     console.log('pipio');
//     //artacum e classi anun@
//      document.getElementsByTagName("div")[0].className;
//      //jnjum e classi anun@
//      document.getElementsByTagName("div")[0].className = '';
//     alert(document.getElementsByTagName("div")[0].className);

//     //avelcnum e class nor anunov
//     document.getElementsByTagName("div")[25].className = 'kuku';
//   // alert(document.getElementsByTagName("div")[25].className);
//     document.getElementsByTagName("div")[26].className = 'kuku';
//    //alert(document.getElementsByTagName("div")[26].className);
//     document.getElementsByTagName("div")[27].className = 'kuku';
//    //alert(document.getElementsByTagName("div")[27].className);
//    //stugum e datark e class@, te che
//    if (document.getElementsByTagName("div")[27].className === '') {
//     alert('ura');
//    }
//    else (alert('che'));
    
// } ;  
