//25.10.2018 տնային աշխատանք
//միջակայքի խնդիր
function myFunc(numberOne, numberTwo, step) {
    let arr = [];
    arrIndex = 0;
    for(i = numberOne; i <= numberTwo; i += step) {
        arr[arrIndex] = i;
        arrIndex++;
    }
    return arr;
}
console.log(myFunc(1, 20, 2));
function summArray(arr) {
    let summ = 0;
    for(i = 0, len = arr.length; i < len; i++) {
        summ += arr[i];
    }
    return summ;
}
console.log(summArray(myFunc(1, 20, 2)));
//նետերի քանակը
function Arrow(sequence) {
    let funcSeq = sequence;
    let count = 0;
    let item = 0;
    let len = funcSeq.length;
    while(item <= len - 1) {
        if(funcSeq[item] === '<' && funcSeq[item + 1] === '-') {
            item += 1;
            while(funcSeq[item] === '-') {
                item += 1;
            }
            if(funcSeq[item] === '<' && funcSeq[item + 1] === '<') {
                count++;
                item += 1;
            }
        } else {
            if(funcSeq[item] === '>' && funcSeq[item + 1] === '>' && funcSeq[item + 2] === '-') {
                item += 2;
                while(funcSeq[item] === '-') {
                    item += 1;
                }
                if(funcSeq[item] === '>') {
                    count++;
                }
            }
        }
        item++;
    }
    return count;
}
/*let seqArrow = "<<<-->>>>-->><----<<<----<<>>-->>>-->>>-->><----<<";
console.log(Arrow(seqArrow));*/
console.log(Arrow("<<<-->>>>-->><----<<<----<<>>-->>>-->>>-->><----<<"));