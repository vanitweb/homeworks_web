//Շախմատը լցնել 0,1,2 երով
let chess1 = [];
let size1 = 8;
for(let i = 0; i < size1; i++){
    chess1[i] = [];
}
for(let i = 0; i < size1; i++){
    for(let j = 0; j < size1; j++){
        if(i == 0 || i == size1 - 1){
            chess1[i][j] = 0;
        } else if(i == j || i == size1 - 1 - j) {
                   chess1[i][j] = 1; 
               } else {
                     chess1[i][j] = 2;
                 }
    }
}
console.log(chess1);
                                                                                                
