//shaxmati dasht * #
const arr_1 = [];
for(let i = 0,length = 8; i < length; i++){
    arr_1[i] = [];
}
for(let i1 in arr_1){
    for(let i2 = 0,arr1_i = arr_1.length / 2; i2 < arr1_i; i2++){
        if(i1 % 2 == 0){
            arr_1[i1].push("*","#")
        }else{
            arr_1[i1].push("#","*")
        }
    }
}
console.log(arr_1)
//ankyunagic poxel
let arr_2 = [];
for(let i = 0,length = 10; i < length; i++){
    arr_2[i] = ["*", "*" ,"*" ,"*" ,"*" ,"*" ,"*" ,"*" ,"*" ,"*"]
}
for(let j in arr_2){
    arr_2[j][j] = 111;
    arr_2[j][arr_2.length-1 -j] = 222;
}
for(let g in arr_2){
    arr_2[g][g] = arr_2[g][g] + arr_2[g][arr_2.length-1 -g];
    arr_2[g][arr_2.length-1 -g] = arr_2[g][g] - arr_2[g][arr_2.length-1 -g];
    arr_2[g][g] = arr_2[g][g] - arr_2[g][arr_2.length-1 -g];
}
console.log(arr_2)
//ankyunagcic nerqev 0 ner ankyunagic 1 verev 2
var arr_3 = [];
for(let i = 0,length = 10; i < length; i++){
    arr_3[i] = [4, 5, 6, 7, 9, 4, 5, 6, 7, 8]
}
for(let i = 0 , length = arr_3[i].length; i < length; i++){
    arr_3[i][i] = 1;
    for(let nerqev = 0; nerqev < i; nerqev++){
        arr_3[i][nerqev] = 0;
    }
    for(let verev = i + 1, el = arr_3[i].length; verev < el; verev++){
        arr_3[i][verev] = 5;
    }
}
console.log(arr_3)
//homework4
var arr_4 = [];
for(let i = 0,length = 10; i < length; i++){
    arr_4[i] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}
for(let i = 0 , length = arr_4[i].length; i < length; i++){
    arr_4[i][i] = "*";
    arr_4[i][arr_4.length-1 -i] = "*";
    for(let j = i +1; j < arr_4.length - i; j++){
        arr_4[j][i] = 1;
    }//1-in
    for(let j = i +1; j < arr_4.length - 1 - i; j++){
        arr_4[i][j] = 2;
    }//2-rd
    for(let j = i +1; j < arr_4.length - i; j++){
        arr_4[arr_4.length -j][arr_4.length -1 - i] = 3
    }//3-rd
    for(let j = i +1; j < arr_4.length - i; j++){
         arr_4[arr_4.length-1 -i][j] = 4
    }//4-rd


   
}
console.log(arr_4)