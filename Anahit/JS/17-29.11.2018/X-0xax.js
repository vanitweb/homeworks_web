//X 0 xax 
class Field {
    constructor(matrix) {
        this.matrix = matrix;
    }
    get() {
        return this.matrix;
    }
}
class Player {
    constructor(simbol, objField) {
        this.simbol = simbol;
        this.functionCallCount = 0; 
        this.objField = objField;
    }
    stugum(){
        if(this.functionCallCount > 2 && this.functionCallCount < 10) {
            for(let i = 0; i < this.objField.matrix.length; i++) {
                if(this.objField.matrix[i] === [this.simbol, this.simbol, this.simbol]) {
                    console.log("դուք հաղթեցիք,խաղն ավարտված է");
                } else {
                    for(let j = 0; j < this.objField.matrix.length; j++) {
                        if(this.objField.matrix[j] === [this.simbol, this.simbol, this.simbol]) {
                            console.log("դուք հաղթեցիք,խաղն ավարտված է");
                        }/* else if((i === j || i ==  this.objField.matrix.length - 1 - j) &&
                                  ( this.objField.matrix[i][j] === this.simbol)) {
                            console.log("դուք հաղթեցիք,խաղն ավարտված է");
                        }*/
                        
                    }
                }
            }
         } else if(this.functionCallCount > 9) {
             console.log("խաղն ավարտված է,հաղթող չկա");
         }
    }
    play(i, j) {
        if(this.objField.matrix[i][j] === '*') {
            this.objField.matrix[i][j] = this.simbol;
            this.functionCallCount++;
            console.log(this.objField.get());
            this.stugum();
        } else if(this.objField.matrix[i][j] === '0' || this.objField.matrix[i][j] === 'X'){
            console.log("նշված ինդեքսներով դաշտը զբաղված է, ընտրեք այ դաշ");
        } else {
             console.log("ինդեքսները սխալ են,դա շտ ից դուրս է");
        }
    }
}

//console.log("խաղալու հերթը մյուս խազացողինն է");

let matrix = [['*', '*', '*'], ['*', '*', '*'],  ['*', '*', '*']];
let field = new Field(matrix);
let player1 = new Player('X', field);
let player2 = new Player('0', field);
console.log("......................1 քայլ................................");
player1.play(0, 1);
console.log("......................2 քայլ................................");
player2.play(0, 1);
console.log("......................3 քայլ................................");
player2.play(0, 2);
console.log("......................4 քայլ................................");
player1.play(2, 3);
console.log("......................5 քայլ................................");
player1.play(1, 1);
console.log("......................6 քայլ................................");
player2.play(2, 0);
console.log("......................7 քայլ................................");
player1.play(1, 0);
console.log("......................8 քայլ................................");
player2.play(2, 1);
console.log("......................9 քայլ................................");
player1.play(1, 2);



