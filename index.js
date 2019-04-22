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

function reverseString(str) {
  if (str.length < 2) {
    return str;
  } else {
    return reverseString(str.substring(1)) + str[0];
  }
}

function isPalindrome(str) {
  if (str.length < 2) {
    return true;
  } else if (str[str.length - 1] === str[0]) {
    return isPalindrome(str.substring(1, str.length - 1));
  } else {
    return false;
  }
}

// function addUpTo(array) {
//   if(array.length <= 1) {
//     return array[0]
//   } else {
//     return array.pop() + addUpTo(array)
//   }
// }

function addUpTo(array, index) {
  return index ? array[index] + addUpTo(array, --index) : array[index];
}

function maxOf(array) {
  if (array.length === 1) {
    return array[0];
  } else {
    return Math.max(array.pop(), maxOf(array));
  }
}

function includesNumber(array, target) {
  if(array.length === 0) {
    return false
  }
  if(array[0] === target) {
    return true
  } else {
    return includesNumber(array.slice(1), target);
  }
}
