//homework1
//1) string_concat("Adsf rgtDsd sdrs Aewr.") => "adsf-rgtdsd-sdrs-aewr"
function string_concat(arg){
    let textarr = arg.split(" ");
    let a = textarr.join("-")
    console.log(a)
}
string_concat("Adsf rgtDsd sdrs Aewr.")
//homework2
//2) make_short("dbh ff sfs ds ehdtu", 3); => "dbh ff sfs"
function make_short(text ,arg){
    let arr = text.split(" ", arg);
    text = arr.join(" ")
    console.log(text)
}
make_short("dbh ff sfs ds ehdtu", 4)
//homework 3.1
//3.1) find_matches_count("ab abc ssjdf abk ab sfrkl", "ab"); => "ab" is found 4 times
function find_matches_count(text, n){
    let k = 0;
    for(let i = text.indexOf(n); i < text.length; i++){
        if(text.indexOf(n, i) === -1){
            break;
        }
        i =  text.indexOf(n, i)
        k++;
    }
    console.log(k)
}
find_matches_count("ab abc ssjdf abk ab sfrkl", "ab")
//homework 3.2
//3.2) find_exact_matches_count("ab abc ssjdf abk ab sfrkl", "ab"); => "ab" is found 2 times
function find_matches_count(text, n){
    let k = 0;
    let a = text.split(" ")
    for(let i = 0; i < a.length; i++){
        if(a[i] === n){
            k++
        }
    }
    console.log(k)
}
find_matches_count("ab abc ssjdf abk ab sfrkl", "ab")
//homework4
//4) fill_by_length(15, 5[, '+']); => [+]00015
function fill_by_length(tiv, qanak, nshan){
    tiv = tiv.toString();
    tiv = tiv.padStart(qanak, '0');
    let ardyunq = nshan.concat('', tiv);
    console.log(ardyunq)
}
fill_by_length(15, 5, '[+]')
//homework 5
// find_palindrome_words("Hello! Aba kdfk ckkc skroekr ababa"); => "Aba", "ckkc", "ababa"
function find_palindrome_words(text){
    let a = text.split(" ");
    for(let i = 0; i < a.length; i++){
        let arr = a[i].split("");
        arr.reverse();
        arr = arr.join("");
        if(a[i] === arr){
            console.log(arr);
        }
    }
}
find_palindrome_words("Hello! Aba kdfk ckkc skroekr ababa")
//Math.random().toString(10).substr(2, 1);