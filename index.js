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

// printString("supercalifragilisticexpialidocious");

function reverseString(myString, myResult = []) {
  // console.log(myString[myString.length - 1]);
  myResult.push(myString[myString.length - 1]);
  if (myString.length > 1) {
    let mySubstring = myString.substring(0, myString.length - 1);
    reverseString(mySubstring, myResult);
  } else {
    return true;
  }
  return myResult.join('');
}

function isPalindrome(myString, myResult = true) {
  if(myString.length === 1) return myResult;
  if(myString.length > 1 && myResult){
    if(myString.charAt(0) === myString.charAt(myString.length - 1)){
      mySubstring = myString.substring(1, myString.length - 1)
      isPalindrome(mySubstring, myResult)
    } else {
      myResult = false;
    }
  }
  return myResult;
}
