//Teri e
let arr = [2, 5, 9, 7, 11, 12, 18, 20, 40];
const binarySearch = function (arr, simbol, skizb, verj) {
    let mejtex = Math.floor((skizb + verj) / 2); 
    while(mejtex >= 0  && mejtex <= arr.length - 1) {
        if(arr[mejtex] === simbol) {
            return (`pntrvoc tari indexn e ${mejtex}`);
        } else if(arr[mejtex] > simbol) {
            let skizb1 = mejtex + 1;
            return binarySearch(arr, simbol, skizb1, verj);
        } else if(arr[mejtex] < simbol){
            let verj1 = mejtex - 1; 
            return binarySearch(arr, simbol, skizb, verj1);
        }
    } 
    return ("aydpisi tarr chka zangvacum");
}
console.log(binarySearch(arr, 11, 0, arr.length - 1));
console.log(binarySearch(arr, 8, 0, arr.length - 1));

