// Code your solution here!

function printString(myString) {
    console.log(myString[0]);
   // printing the first char of the string
    if (myString.length > 1) {
// if the string has a length greater than 1, create a substring starting at the second character of the original string
// and print the first character of that and call through until hit base 
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
    }
  }

  function reverseString(s) {
    if (s.length < 2){
      return s
    } else {
      return reverseString(s.substring(1)) + s[0]
    }
  }
  function isPalindrome(s) {
    if (s.length < 2){
// If the string length is less than 2 it must be a palindrome so return true
      return true
    } else if (s[0] !== s[s.length-1]){
// If the strings first letter is not equal to its last letter it can't be a palindrome.
      return false
    } else {
      let subString = s.substring(1, s.length-1)
// if neither of these match then create a substring variable using the .sustring method starting at the second 
// character of the string to the end and then calling the function again.
      return isPalindrome(subString)
    }
  }


  function addUpTo(array, index){
    if (index === 0){
// if the index is 0, return the first element in the array
      return array[0]
    } else {
// else recursively call down through until you hit the base case and then figure out the sum
      return addUpTo(array, index-1) + array[index]
    }
  }
  

  function maxOf(array){
    if (array.length < 2){
// if the arrays length is only one, return the first member of the array as it is the max
        return array[0]
    }
    else if (array[0] <= array[1]) {
// if the first member is less than of equal to the second member of the array, remove it from the array and 
// then recall the array with the changed array
        array.shift()
        return maxOf(array)
    }
// if it is not then remove the second member of the array and return the array call.
    else {array.splice(1, 1)
    return maxOf(array)}
  }

  function includesNumber(array, int) {
// first check to see if the array lenght is more than 1 
 if (array.length < 2){
     return array[0] === int
 }

 if (array[0] === int){
     return true
 }
 else {
     array.shift()
     return includesNumber(array, int)
 }
  }