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

function reverseString(string) {
    if (string) {
        let substring = string.substring(1, string.length)
        return reverseString(substring) + string[0]
    } else {
        return string
    }
}

function isPalindrome(string) {
    if (string.length > 1) {
        let substring = string.substring(1, string.length -1)
        return string[0] === string[string.length-1] ? isPalindrome(substring) : false;
    } else {
        return true;
    }
}

function addUpTo(array, index) {
    if (index > 0) {
        let n = [array[0] + array[1]]
        let newArray = n.concat(array.slice(2))
        return addUpTo(newArray, index - 1) 
    } else {
        return array[0]
    }
}

function maxOf(array) {
    if (array.length > 1) {
        if (array[0] >= array[1]) {
            let newArray = array.slice(0, 1).concat(array.slice(2))
            return maxOf(newArray);
        } else {
            return maxOf(array.slice(1));
        }
    } else {
        return array[0];
    }
}

function includesNumber(array, n) {
    if (array.length > 0) {
        if (array[0] === n) {
            return true;
        } else {
            return includesNumber(array.slice(1), n)
        }
    } else {
        return false;
    }
}