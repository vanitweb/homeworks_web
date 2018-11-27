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
//
const verify = (string) => {

    // Array of the type of braces
    var braces = ["(", ")", "[", "]", "<", ">"];
    // Array half the length of braces Array
    var balanced = Array.apply(null, {length: braces.length/2}).map(function() { return 0; });

    for(let i = 0; i < string.length; ++i) {
        let char = string[i], braceIndex = braces.indexOf(char);

        if ( braceIndex == -1 ) { 
            // If current char is not any type of brace, continue.
            continue;
        }

        // Get the index of the brace found halved and floored
        let braceBalancingIndex = braceIndex / 2, braceFloor = Math.floor( braceBalancingIndex );

        // If the halved index is equal to the index, then it must be an opening, else it must be a closing
        if (braceBalancingIndex == braceFloor) {
            balanced[braceFloor]++;
        }
        else {
            balanced[braceFloor]--;
			// If at any type being, the balance is negative, there was a closing without opening
        for(let j = 0; j < balanced.length; ++j) {
            if (balanced[j] < 0) return 0;
        }

    }

    // If at the end the string is not balanced, there where more openings than closings
    for(let i = 0; i < balanced.length; ++i) {
        if (balanced[i] != 0) return 0;
    }

    return 1;
}
//
function IsBalanced(inputString) {

    var parenCount, bracketCount, angleCount = 0;

    for (var i = 0; i < inputString.Length; i++) {

        var checkChar = inputString[i];

        if (checkChar == '(') parenCount++;
        if (checkChar == ')') parenCount--;
        if (checkChar == '[') bracketCount++;
        if (checkChar == ']') bracketCount--;
        if (checkChar == '<') angleCount++;
        if (checkChar == '>') angleCount--;

        if (parenCount < 0 || bracketCount < 0 || angleCount < 0)
            return 0;
    }

    if (parenCount != 0) return 0;
    if (bracketCount != 0) return 0;
    if (angleCount != 0) return 0;

    return 1;
