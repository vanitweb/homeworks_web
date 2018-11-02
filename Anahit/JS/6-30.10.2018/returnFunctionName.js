// 2. Գրել ֆունկցիա, որը դինամիկ վերադարձնում է իր անունը։

function functionName() {
    return arguments.callee;
}
console.log(functionName());
