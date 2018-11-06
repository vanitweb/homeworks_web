/*3. Գրել F ֆունկցիա, որը արգումենտում ստանում է ֆունկցիա և մի քանի թիվ և նրանց գումարը հաշվելուց հետո կանչում փոխանցված ֆունկցիան ստացված արժեքով։ F ֆունկցիան պետք է կանչել 3 տեղից
    - Փոխանցել print ֆունկցիան, որը կարտածի արգումենտով ստացված թիվը - F(print, 4, 5, 6)
    - Փոխանցել square ֆունկցիան, որը կարտածի արգումենտով ստացված  թվի քառակուսին - F(square, 4, 5, 6)
    - Փոխանցել prime ֆունկցիան, որը կարտածի True եթե արգումենտով ստացված թիվը պարզ է, False՝ հակառակ դեպքում- F(prime, 4, 5, 6)*/
function addContact(f, id1, id2, id3) {
	let sum = id1 + id2 + id3; 
    f(sum);
}

function print(ob1) {
    console.log(ob1);
}
function square(ob2){
    console.log(ob2 * ob2);
}
function prime(ob3){
    let result = true;
    for (let j = 2; j * j <= ob3; ++j){
        if (ob3 % j === 0) {
           result = false;
        }  
    }
     console.log(result); 
}
addContact(print, 4, 5, 6);
addContact(square, 4, 5, 6);
addContact(prime, 4, 5, 6);


