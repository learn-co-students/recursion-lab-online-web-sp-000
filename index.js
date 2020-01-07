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

function reverseString(str){
	if (str.length <= 1) return str;
	return reverseString(str.slice(1)) + str[0];
}

function isPalindrome(str){
  if(str.length === 1) return true;
  if(str.length === 2) return str[0] === str[1];
  if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
  return false;
}

function addUpTo(arr, index) {
      if (index > 0) {
       return addUpTo(arr, index-1) + arr[index]
     } else {
       return arr[0]
     }
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
