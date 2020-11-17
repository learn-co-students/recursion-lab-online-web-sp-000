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
  // string[4] + string[3] + string[2] + string[1] + string[0]
  // reversedString + string[0]
  if (string.length > 1) {
    return reverseString(string.substring(1, string.length)) + string[0];
  } else {
    return string;
  }
}

function isPalindrome(string) {
  if (string.length > 1) {
    return (
      string[0] === string[string.length - 1] &&
      isPalindrome(string.substring(1, string.length - 1))
    );
  } else {
    return true;
  }
}

function addUpTo(array, idx) {
  if (idx > 0) {
    return array[idx] + addUpTo(array, idx - 1);
  } else {
    return array[0];
  }
}

function maxOf(array) {
  if (array.length > 1) {
    let maxRemainder = maxOf(array.slice(1));
    if (array[0] > maxRemainder) {
      return array[0];
    } else {
      return maxRemainder;
    }
  } else {
    return array[0];
  }
}

function includesNumber(array, number) {
  if (array.length > 1) {
    return !!(array[0] === number) || includesNumber(array.slice(1), number);
  } else {
    return !!(array[0] === number);
  }
}
