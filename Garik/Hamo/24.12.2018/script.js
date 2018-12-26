const obj = {
    a : ["aadsa", "aasda", "aghh"],
    b : ["badsa", "basda", "bghh"],
    c : ["cadsa", "casda", "cghh"],
    d : ["dadsa", "dasda", "dghh"],
    e : ["eadsa", "easda", "eghh"],
    f : ["fadsa", "fasda", "fghh"],
    g : ["gadsa", "gasda", "gghh"],
    h : ["hadsa", "hasda", "hghh"],
    i : ["iadsa", "iasda", "ighh"],
    j : ["jadsa", "jasda", "jghh"],
    k : ["kadsa", "kasda", "kghh"],
    l : ["ladsa", "lasda", "lghh"],
    m : ["madsa", "masda", "mghh"],
    n : ["nadsa", "nasda", "nghh"],
    o : ["oadsa", "oasda", "oghh"],
    p : ["padsa", "pasda", "pghh"],
    q : ["qadsa", "qasda", "qghh"],
    r : ["radsa", "rasda", "rghh"],
    s : ["sadsa", "sasda", "sghh"],
    t : ["tadsa", "tasda", "tghh"],
    u : ["uadsa", "uasda", "ughh"],
    v : ["vadsa", "vasda", "vghh"],
    w : ["wadsa", "wasda", "wghh"],
    x : ["xadsa", "xasda", "xghh"],
    y : ["yadsa", "yasda", "yghh"],
    z : ["zadsa", "zasda", "zghh"]
}
const arrObj = Object.entries(obj);
function gtnel(arr, tar){
    let jishtMas;
    if(tar.charCodeAt(0) >= arr[parseInt(arr.length / 2)][0].charCodeAt(0)){
        jishtMas = arr.slice(parseInt(arr.length / 2));
    }else{
        jishtMas = arr.slice(0, parseInt(arr.length / 2));
    }
    if(jishtMas.length === 1 && jishtMas[0][0] === tar[0]){
        return jishtMas[0][1];
    }else{
        return gtnel(jishtMas, tar)
    }
}
console.log(gtnel(arrObj, "e"))
console.log(gtnel(arrObj, "y"))