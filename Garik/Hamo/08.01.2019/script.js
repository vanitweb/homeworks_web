let arrIndex = [];
function gtnel(arr, tiv){
    let jishtMas;
    let index;
    if(tiv >= arr[parseInt(arr.length / 2)]){
        jishtMas = arr.slice(parseInt(arr.length / 2));
        index = parseInt(arr.length / 2);
    }else{
        index = 0;
        jishtMas = arr.slice(0, parseInt(arr.length / 2));
    }
    arrIndex.push(index)
    if(jishtMas.length === 1){
        if(jishtMas[0] === tiv){
            let sum = 0;
            for(let i of arrIndex){
                sum += i;
            }
            return `gtnvox - ${jishtMas[0]} \nindex - ${sum}`;   
        }else{
            return `masivum ${tiv} tiv chka`
        }
    }else{
        return gtnel(jishtMas, tiv)
    }
}
console.log(gtnel([1, 3, 6, 9, 10, 16, 27, 38, 49, 50,  55, 62], 62))