// prints out characters of string using recursion
function printString(str) {
    console.log(str[0]);

    if (str.length > 1) {

        let substr = str.substring(1, str.length);
    
        printString(substr);

    } else {

        return true;
    }

}

// reverts string using recursion
function reverseString(str) {
    if (str === "") {
      return "";

    } else {
    
      return reverseString(str.substr(1)) + str.charAt(0);
    }
  }
/*
recursionReverse('hello')
(recursionReverse('ello') + 'h')
((recursionReverse('llo') + 'e') + 'h')
(((recursionReverse('lo') + 'l') + 'e') + 'h')
((((recursionReverse('o') + 'l') + 'l' ) + 'e') + 'h')
(((('o') + 'l') + 'l' ) + 'e') + 'h')
*/

// checks if a string is a palindrome using recursion
function isPalindrome(str) {
    let length = str.length;

    if (length < 2) {return true};

    if (str[0] === str[str.length-1]) {
        return isPalindrome(str.substr(1, str.length-2));
    }

    return false;
}

// adds the elements of an array up to a given index 
function addUpTo(arr, i) {
    if (i === 0) {
        return arr[0];
    } 
    else {
        return addUpTo(arr,i-1) + arr[i];
    }
}

// finds the largest integer in an array
function maxOf(arr) {
    if (arr.length === 1) {
        return arr[0];
    } else {
        return maxOf(arr.sort().slice(1));
    }
}

// checks if a number is presented in an array
function includesNumber(arr, num) {
    if (arr.length === 0) {return false}
    if (arr[0] === num) {return true}
    else {
        return includesNumber(arr.slice(1), num)
    }
}

