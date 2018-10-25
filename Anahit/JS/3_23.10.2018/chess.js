//Շախմատի տախտակ
let chess = [];
let size = 8;
for(let i = 0; i < size; i++){
    if(i % 2 == 0) chess[i] = ['*','#','*','#','*','#','*','#'];
    else  chess[i] = ['#','*','#','*','#','*','#','*'];
}
console.log(chess);                                                                          
