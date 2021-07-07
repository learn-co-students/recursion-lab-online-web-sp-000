// Code your solution here!

function printString(myString){
    console.log(myString[0]);
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      return printString(mySubString);
    } else {
      return true;
    }
}


function reverseString(myString){
    if(myString.length === 1) {
      return myString
    }else{
    console.log(myString[myString.length]);
    return reverseString(myString.substr(1)) + myString.charAt(0);
    }
}


function isPalindrome(myString){
  if (myString.length === 1)  { return true }
  if (myString[0] !== myString[myString.length - 1]) { return false }
  return isPalindrome(myString.slice(1, myString.length - 1));
}


function addUpTo(arr, i){
    if(i == 0){
      return arr[i];
    }
    return arr[i] + addUpTo(arr, --i) ;
}



function maxOf(arr){
  return arr.length === 1 ? arr[0] : Math.max(arr.pop() , maxOf(arr))
}

function includesNumber(arr, element){
  if(!arr.length){
    return false
  }else if(arr[0] == element){
    return true
  }else{
    arr.shift();
    return includesNumber(arr, element);
  }
}
