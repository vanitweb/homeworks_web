//2.Make_short("dbh ff sfs ds ehdtu", 3); => "dbh ff sfs"
text_elision = function(str, length) {


    if (str.length > length) {
        return str.substring(3, str - length);
    }
};
console.log(text_elision('dbh ff sfs ds ehdtu', 3));


//3.2.Find_exact_matches_count("ab abc ssjdf abk ab sfrkl", "ab")
function count(str, substr) {
    str = str.split(" ");
    return str.filter(ab => ab.toLowerCase() === substr);
}
console.log(count("ab abc ssjdf abk ab frkl", 'ab'));


//Classwork1.The line of random numbers and letters
var rand = Math.random().toString(30).substring(6);
console.log(rand);


//5.Palindrome words
function isPalindrome(s) {
    return s == s.split("").reverse().join("") ? true : false;
}

console.log(isPalindrome("Hello!"));
console.log(isPalindrome("aba"));
console.log(isPalindrome("kdfk"));
console.log(isPalindrome("ckkc"));
console.log(isPalindrome("skroekr"));
console.log(isPalindrome("ababa"));