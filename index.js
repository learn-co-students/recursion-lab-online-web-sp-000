function printString(myString) {
  console.log(myString[0]);
 
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}// Code your solution here!

function reverseString(string) {
  if (string === "")
    return "";
  
  else
    return reverseString(string.substr(1)) + string.charAt(0)
}


function isPalindrome(str){
  let le = str.length;
  if (le === 0 || le === 1) {
    return true;
  }
  if (str[0] === str[le - 1]) {
    return isPalindrome(str.slice(1, le - 1) );
  }  
  return false;
}

function addUpTo(array, index) {
return index ? array[index] + addUpTo(array, --index) : array[index];
}


function maxOf(array) {
  const arr = array.slice()
  if (arr.length == 1) {return arr[0]}
  if (arr[0] <arr[1]) {arr.splice(0,1)}
  else {arr.splice(1,1)}
  return maxOf(arr)
}

function includesNumber(array, num) {
  const arr = array.slice()
  if (arr.length === 0) {return false}
  if (num === arr[0]) {return true}
  else {arr.splice(0,1)}
  return includesNumber(arr,num)
}



