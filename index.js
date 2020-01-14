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
  let finalChar = string[string.length - 1]
  
  if (string.length > 1) {
    let substring = string.substring(0, string.length - 1)
    return(finalChar + reverseString(substring))
  } else {
    return string[0]
  }
}

function isPalindrome(string) {
  let count = string.length
  
  if (count === 1) {
    return true
  } else if (string[0] === string[string.length - 1]) {
    let substring = string.substring(1, string.length - 1)
    return isPalindrome(substring)
  } else {
    return false
  }
}

function addUpTo(array, indx) {
  let sum;
  // need indx -1 somewhere
  if (indx !== 0) {
    return(array[indx] + addUpTo(array, indx-1))
  } else {
    return array[indx]
  }
}

// function maxOf(array) {
//   if (array.length === 1) {
//     return array[0]
//   } else if (array[0] > maxOf(array.slice(1))) {
//     return array[0]
//   } else {
//     return maxOf(array.slice(1))
//   }
// }

// console.log(maxOf([1,2,9,4,5]))

function maxOf(myArray) {
  if (myArray.length === 1) {
    return myArray[0];
  } else {
    return Math.max(myArray.pop(), maxOf(myArray));
  }
}

function includesNumber(array, num) {
  if (array[0] === num) {
    return true
  } else if (array.length > 1) {
    return includesNumber(array.slice(1), num)
  } else {
    return false
  }
}

console.log(includesNumber([1,2,3], 2))