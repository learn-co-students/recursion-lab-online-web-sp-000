// Code your solution here!
function printString(myString) {
    console.log(myString[0]);

    if (myString.length > 1) {
        let mySubString = myString.substring(1, myString.length);
        printString(mySubString);
    } else {
        return true;
    }
}

function reverseString(myString) {
    if (myString === '') {
        return '';
    } else {
        return myString.slice(-1) + reverseString(myString.substring(0, myString.length-1));
    }
}

function isPalindrome(myString) {
    if (myString.length < 2) {
        return true
    } else if (myString.slice(0, 1) === myString.slice(-1)) {
       return isPalindrome(myString.slice(1, -1))
    } else {
        return false 
    }
}

function addUpTo(myArray, i) {
    if (i) {
       return addUpTo(myArray, i-1) + myArray[i]
    } else {
        return myArray[i]
    }
}

function maxOf(myArray) {
    if (myArray.length === 1) {
        return myArray[0]
    } else {
        return Math.max(myArray[0], maxOf(myArray.slice(1)))
    }
}

function includesNumber(myArray, num) {
    if (myArray.length === 0) {
        return false
    } else if (myArray[0] === num) {
        return true
    } else {
        return includesNumber(myArray.slice(1), num)
    }
}

