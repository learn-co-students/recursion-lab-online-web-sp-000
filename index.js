// Code your solution here!

// function printString(string) {
//   let substring;

//   console.log(string[0]);

//   substring = string.substring(1, string.length);

//   printString(substring)
// }

// printString("pizza")

function printString(myString) {
  console.log(myString[0]);
 
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(str) {
  if (str.length < 2) {
    return str
  } else {
     return reverseString(str.substring(1)) + str[0];
  }
  
}

function isPalindrome(str) {
  let letters = str.length;
 
  if (letters < 2) {
    return true;
  } else if (str[letters - 1] === str[0]) {
    return isPalindrome(str.substring(1, letters - 1));
  } else {
    return false;
  }
}

function addUpTo(arr, index) {
  return index ? arr[index] + addUpTo(arr, --index) : arr[index];
}

function maxOf(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    return Math.max(arr.pop(), maxOf(arr));
  }
}

function includesNumber(arr, num) {
  if (!arr.length) {
    return false;
  } else if (arr[0] === num) {
    return true;
  } else {
    return includesNumber(arr.slice(1), num);
  }
}


