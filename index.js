// Code your solution here!
function printString(string) {
  console.log(string[0]);
  if (string.length > 1) {
    let sub = string.substring(1, string.length);
    printString(sub);
  }
  else {
    return true;
  }
}

function reverseString(string) {
  if (string.length === 1){
    string = string;
  }
  if (string.length > 1) {
    let slice = string.slice(0, string.length-1);
    string = string.slice(-1) + reverseString(slice);
  }
  return string;
}

function isPalindrome(string) {
  if (string.length === 1) {
    return true;
  }
  else {
    if (string[0] === string.slice(-1)) {
      if (string.length === 2) {
        return true;
      }
      let slice = string.slice(1, string.length-1);
      return isPalindrome(slice);
    }
    else {
      return false;
    }
  }
}

function addUpTo(array, index) {
  if (index === 0) {
    return array[index];
  }
  return array[index] + addUpTo(array, index-1);
}

function maxOf(array) {
  if (array.length === 1) {
    return array[0];
  }
  else {
    if (array[0] > array[array.length-1]) {
      let slice = array.slice(0, array.length-1);
      return maxOf(slice);
    }
    else {
      let slice = array.slice(1, array.length);
      return maxOf(slice);
    }
  }
}

function quicksort(array) {
  if (array.length < 2) {
    return array;
  }
  else {
    let aL = [];
    let aR = [];
    let p = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] <= p) {
        aL.push(array[i]);
      }
      else {
        aR.push(array[i]);
      }
    }
    return quicksort(aL).concat(p, quicksort(aR));
  }
}



function includesNumber(array, num) {
  if (array.length === 0) {
    return false;
  }
  else if (array.length === 1) {
    if (num === array[0]) {
      return true;
    }
    else {
      return false;
    }
  }
  else {
    if (array[0] === num) {
      return true;
    }
    else {
      let a = array.slice(1, array.length);
      return includesNumber(a, num);
    }
  }
}


