
// Code your solution here!

function printString(string) {
  console.log(string[0])

  if (string.length > 1) {
    let mySubString = string.substring(1, string.length)
    printString(mySubString)
  } else {
    return true
  }
}

function reverseString(string) {
  // console.log(string[string.length - 1])
  if (string === "") {
    return ""
  } else {
      return reverseString(string.substr(1)) + string[0]
   }
  }


  function isPalindrome(myString) {
    let l = myString.length;

    if (l < 2) {
      return true;
    } else if (myString[l - 1] === myString[0]) {
      return isPalindrome(myString.substring(1, l - 1));
    } else {
      return false;
    }
  }

function addUpTo(myArray, index) {
  return index ? myArray[index] + addUpTo(myArray, --index) : myArray[index];
}

function maxOf(arr) {
  if (arr.length === 1) {
    return arr[0]
  } else {
    return Math.max(arr.pop(), maxOf(arr))
  }
}

function includesNumber(arr, number) {
  if (arr.length === 0) {
    return false;
  } else if (arr[0] === number) {
    return true;
  } else {
     return includesNumber(arr.slice(1), number);
  }

}
