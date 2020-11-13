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

  if(myString.length > 1) {
    let newStart = myString.substring(myString.length - 1);
    let remaining = myString.substring(0, myString.length - 1);
    return newStart + reverseString(remaining)
  } else {
    return myString
  }
}
function isPalindrome(myString) {
  if (myString.length > 1) {
    let start = myString.substring(0, 1);
    let end = myString.substring(myString.length - 1);
    let newString = myString.substring(1, myString.length - 1);
    return start === end && isPalindrome(newString)
  } else {
    return true;
  }
}
function addUpTo(array, index) {
  if (index > 0) {
    let newArr = array.slice(1);
    return array[0] + addUpTo(newArr, index - 1)
  } else {
    return array[0]
  }
}

function maxOf(array) {
  if (array.length > 1) {
    let newArr = array.slice(1);
    let valueOne = array[0]
    let valueTwo = maxOf(newArr);
    if (valueOne > valueTwo) {
      return valueOne
    } else {
      return valueTwo
    }
  } else {
    return array[0];
  }
}

function includesNumber(array, number) {
  if (array.length > 1) {
    let newArr = array.slice(1);
    return array[0] === number || includesNumber(newArr, number);}
    else {return array[0] === number;
    }
}