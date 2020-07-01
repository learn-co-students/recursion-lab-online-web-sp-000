function printString(string) {
  console.log(string[0]);

  if (string.length > 1) {
    let mySubString = string.substring(1, string.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(string) {
  if (string.length > 1) {
    return string[string.length - 1] + reverseString(string.substring(0, string.length - 1));
  } else {
    return string;
  }
}

function isPalindrome(string) {
  if(string.length > 1) {
    if (string[0] === string[string.length - 1]) {
      return isPalindrome(string.substring(1, string.length - 1));
    } else {
      return false;
    }
  } else {
    return true;
  }
}

function addUpTo(array, index) {
  if (index === 0) {
    return array[0];
  } else {
    const addition = array.shift();
    return addition + addUpTo(array, index - 1);
  }
}

function maxOf(array) {
  if (array.length === 1) {
    return array[0];
  } else {
    let right = maxOf(array.slice(1));
    return array[0] > right ? array[0] : right
  }
}

function includesNumber(array, number) {
  if(array.length > 1) {
    return array[0] === number ? true : includesNumber(array.slice(1), number);
  } else {
    return array[0] === number;
  }
}
