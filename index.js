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
  if (string === '') {
    return '';
  } else {
    return reverseString(string.substring(1))+string.charAt(0);
  }
}

function isPalindrome(string) {
  let newString;
  if (string[0] !== string[string.length-1])  {
    return false
  } else {
    newString = string.substring(1, string.length-1)
    if (string.length > 1) {
      isPalindrome(newString)
    }
  }
  return true
}

function addUpTo(array, ind) {
  if (ind !== 0) {
    return addUpTo(array, ind-1) + array[ind]
  } else {
    return array[ind]
  }
}

function maxOf(array) {
  if (array.length > 1) {
    return maxOf(array.sort().slice(1))
  } else {
    return array[0]
  }
}

function includesNumber(array, value) {
  if (array[0] === value) {
    return true
  } else if (array.length > 1) {
    return includesNumber(array.slice(1), value)
  } else {
    return false
  }
}
