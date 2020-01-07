// Code your solution here!

function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    myString = myString.substring(1, myString.length);
    printString(myString);
  } else {
    return true;
  }
}

function reverseString(myString) {
  if (myString === '') {
    return ''
  } else {
    return reverseString(myString.substring(1)) + myString[0]
  }
}

function isPalindrome(str) {
  if (str.length === 0 || str.length === 1) {
    return true
  }

  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.substring(1, str.length - 1))
  }

  return false
}

function addUpTo(arr, n) {

  if (n > 0) {
    return addUpTo(arr, n-1) + arr[n]
  } else {
    return arr[0]
  }
}

function maxOf(arr) {

  if (arr.length === 1) {
    return arr[0]
  }

  if (arr[0] >= arr[1]) {
    arr.splice(1, 1)
  } else {
    arr.splice(0, 1)
  }

  return maxOf(arr)
}

function includesNumber(arr, num) {
  if (arr.length === 0) {
    return false
  }

  if (arr[0] === num) {
    return true
  }

  if (arr.length > 0) {
    arr.splice(0, 1)
  }

  return includesNumber(arr, num)
}
