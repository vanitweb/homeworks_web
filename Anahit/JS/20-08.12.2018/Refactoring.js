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
    if (s.length == 0) {
        return -1;
    } else {
        for(var aIndex = -1, bIndex = -1, i = s.length -1; i > 0; i--) {
            if (s[i] == a) {
                aIndex = i;
                break;
            } 
            if (s[i]) == b) {
                bIndex = i;
                break;
            }
        }
      /*  if(aIndex != -1 && bIndex == -1) {
            return aIndex;
        } else if (aIndex == -1 && bIndex != -1) {
            return bIndex;
        } else if(aIndex != -1 && bIndex != -1) {
            return Math.max(aIndex, bIndex);
        } 
        return -1;
    }*/
     return Math.max(aIndex, bIndex);
}
console.log('2rd lucum');
console.log(func1("sfgryhf", "g", "f"));


