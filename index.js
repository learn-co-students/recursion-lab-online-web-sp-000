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
  //MY NON-RECURSIVE SOLUTION:
  // let newString = "";
  // let i = string.length - 1;
  // while (i > -1) {
  //   newString = newString + string[i]
  //   i-=1
  // }
  // return newString
  
 //SOLUTION KEY:
  if (string.length < 2) {
    return string;
  } else {
    return reverseString(string.substring(1)) + string[0];
  }
  
}

function isPalindrome(string) {
  if (string.length > 1 && string[0] === string[string.length - 1]) {
    
    // delete the final character of the string.
    string = string.substring(0, string.length - 1); 
    
    // delete the first character of the string.
    string = string.substring(1);
    
    //recursion
    isPalindrome(string);
    return true
  }
  return false
}

function addUpTo(array, n) {
  //SOLUTION KEY
  //return index ? myArray[index] + addUpTo(myArray, --index) : myArray[index];
  
  //RESTATED
  if (n) {
    return array[n]  + addUpTo(array, n-1)
  } else {
    return array[n]
  }
  
  //RESTATED DIFFERENTLY
  // if (n) {
  //   n-=1;
  //   return array[n+1]  + addUpTo(array, n)
  // } else {
  //   return array[n]
  // }
}

function maxOf(array) {
  if (array.length === 1) {
    return array[0]
  } else {
    //SOLUTION KEY
    return Math.max(array.pop(), maxOf(array));    
  }
}

function includesNumber(array, n) {
  if (array.length === 0) {
    return false
  }
  if (array.length === 1 && array[0] !== n) {
    return false
  }
  if (array.length === 1 && array[0] === n) {
    return true
  }
  if (array.length > 1 && array[0] === n) {
    return true
  }
  if (array.length > 1 && array[0] !==n) {
    array.shift()
    return includesNumber(array, n)
  }
}