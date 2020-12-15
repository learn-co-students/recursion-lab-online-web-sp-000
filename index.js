function printString(string) {
  console.log(string[0]);
  if (string.length > 1) {
    printString(string.substring(1));
  } else {
    return true;
  }
}

function reverseString(string) {
  if (string.length > 1) {
    return (
      string[string.length - 1] +
      reverseString(string.substring(0, string.length - 1))
    );
  } else {
    return string;
  }
}

function isPalindrome(string) {
  if (string[0] === string[string.length - 1]) {
    if (string.length > 1) {
      isPalindrome(string.substring(1, string.length - 1));
    }
  } else {
    return false;
  }
  return true;
}

function addUpTo(array, index) {
  if (index > 0) {
    return array[index] + addUpTo(array, index - 1);
  } else {
    return array[0];
  }
}

function maxOf(array) {
  if (array.length > 1) {
    if (array[0] > array[1]) {
      array.splice(1, 1);
    } else {
      array.shift();
    }
    return maxOf(array);
  } else {
    return array[0];
  }
}

function includesNumber(array, num) {
  // 5 === array[0]?
  if (array.length > 1) {
    if (array[0] === num) {
      return true;
    } else {
      array.shift();
      return includesNumber(array, num);
    }
  } else {
    return array[0] === num;
  }
}
