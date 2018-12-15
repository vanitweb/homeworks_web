//dardznel aveli optimal hetevyal kod@

function func(s, a, b) {
    if (s.match(/^$/)) {
        return -1;
    }
    var i = s.length -1;
    var aIndex = -1;
    var bIndex = -1;
    while ((aIndex == -1) && (bIndex == -1) && (i > 0)) {
        if (s.substring(i, i + 1) == a) {
            aIndex = i;
        }
        if (s.substring(i, i + 1) == b) {
            bIndex = i;
        }
        i = i - 1;
    }
    if (aIndex != -1) {
        if (bIndex == -1) {
            return aIndex;
        } else {
            return Math.max(aIndex, bIndex);
        }
    }
    if (bIndex != -1) {
        return bIndex;
    } else {
        return -1;
    }
}  
console.log('1in lucum');
console.log(func("sfgryhf", "g", "f"));

//optimal darzdrac

function func1(s, a, b) {
    let i = s.length -1;
    if (i === -1) {
        return -1;
    } else {
        for(var aIndex = -1, bIndex = -1; i > 0; i--) {
            if (s[i] == a ||  s[i] == b) {
               return i;
            }
        }
    }
}
console.log('2rd lucum');
console.log(func1("sfgryhf", "g", "f"));


