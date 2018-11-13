//task1  string_concat("Adsf rgtDsd sdrs Aewr.") => "adsf-rgtdsd-sdrs-aewr"
function string_concat(str) {
    let strReturn = ''; //nuyn stringi vra chpoxec dra hamar nori mej lcreci,inchi ??
    for(let i = 0; i < str.length; i++) {
        if(str[i] === ' ') {
            strReturn += '-';
        } else if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
            strReturn += String.fromCodePoint(str.charCodeAt(i) +32);
        } else {
            strReturn += str[i];
        }
    }
    return strReturn;
}
let string = "Adsf rgtDsd sdrs Aewr.";
console.log(string_concat(string));

//task2  make_short("dbh ff sfs ds ehdtu", 3); => "dbh ff sfs"
function  make_short(str,count) {
    let strReturn = '';
    let counter = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] === ' ') {
            counter++;
        }
        strReturn += str[i];
        if(counter === count) {  
            return strReturn;
        }
    }    
}
let string1 = "dbh ff sfs ds ehdtu";
console.log(make_short(string1,3)); 

//task 3.1 find_matches_count("ab abc ssjdf abk ab sfrkl", "ab"); => "ab" is found 4 times
function  find_matches_count(str1,str2) {
    let found = 0;
    for(let i = 0; i < str1.length; i++) {
        if(str1[i] === str2[0]) { 
            let count = 0;
            for(let j = 1; j < str2.length; j++){ 
                if(str1[i + j] === str2[j]) {
                    count ++;
                }
            }
            if(count === str2.length - 1) {
                found ++;
            }
        }
    }
    console.log(`${str2} is found ${found} times`);
}
let str2 = "ab abc ssjdf abk ab frkl";
let str3 = "ab";
find_matches_count(str2,str3);

//task 3.2 find_exact_matches_count("ab abc ssjdf abk ab sfrkl", "ab"); => "ab" is found 2 times
function  find_exact_matches_count(str1,str2) {
    let found = 0;
    for(let i = 0; i < str1.length; i++) {
        if((str1[i] === str2[0]) &&
          ( (str1[i - 1] === ' ') || (i === 0 )) && 
           (str1[i + str2.length]) === ' ') { 
            let count = 0;
            for(let j = 1; j < str2.length; j++){ 
                if(str1[i + j] === str2[j]) {
                    count ++;
                }
            }
            if(count === str2.length - 1) {
                found ++;
            }
        }
    }
    console.log(`${str2} is found ${found} times`);
}
find_exact_matches_count(str2,str3);

//3.2 2rd exanak karch
function find_exact_matches_count1(str1,str2) {
    var arr = str1.split(" ");
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === str2) {
            count ++;
        }
    }
    console.log(`${str2} is found ${count} times`);
}
find_exact_matches_count1(str2,str3);

//task 4 fill_by_length(15, 5, ['+']); => [+]00015
function  fill_by_length(num1,num2,sign) {
    let str = '';
    let num1Str = num1.toString();  
    for(let i = 0; i < num2 - num1Str.length; i++){
        str += '0'; 
    }
    str += num1Str;
    if(!arguments[2]) {  
        return str;
    } else {
        return arguments[2] + str;
    }
}
console.log(fill_by_length(15,5));
console.log(fill_by_length(15,5,['+']));
console.log(fill_by_length(15,5,['-']));

//task 5 find_palindrome_words("Hello! Aba kdfk ckkc skroekr ababa"); => "Aba", "ckkc", "ababa"
function find_palindrome_words(str) {
    let  arr = str.split(" ");
    let arrReturn = [];
    for(let i = 0; i < arr.length; i++) {
        if(i % 2 !== 0) {
            arrReturn.push(arr[i]);
        }
    }
    return arrReturn;
}  
console.log(find_palindrome_words("Hello! Aba kdfk ckkc skroekr ababa"));
