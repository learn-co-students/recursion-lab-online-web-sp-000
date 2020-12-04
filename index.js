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

function reverseString(myString){
  if (myString === ""){
    return ""
  } else {
    return reverseString(myString.substr(1)) + myString.charAt(0);
  }
}

function isPalindrome(myString){
  if(myString.length <= 1){
    return true;
  }
  let [firstLetter] = myString;
  let lastLetter = myString[myString.length-1];
  if (firstLetter === lastLetter) {
    let middleChunk = myString.substring(1, myString.length-1);
    return isPalindrome(middleChunk)
  } else {
    return false
  }
}

let array = [1, 4, 5, 3] //index @2, so include 1, 4, 5, exclude 3

function addUpTo(array, index) {
  // return the sum of all values up to and including
  // the value at the given index
  // assume non-empty arrays are entered
  let sum = 0;
  if (index === 0) {
    return sum += array[0];
  } else {
    return addUpTo(array, index - 1) + array[index];
  }
}
array = [2, 3, 1, 4]
function maxOf(array){
  let nums = array.slice()
  if (nums.length == 1){ 
    return nums[0]
  }
  if (nums[0] < nums[1]){
    nums.splice(0,1);
  }
  else {
    nums.splice(1, 1);
  }
  return maxOf(nums);
}

function includesNumber(array, desiredIndex){
 let arrayLength = array.length
 let num = array.slice()
 if (desiredIndex == num[0]){
   return true
 }
 if (desiredIndex != num[0] && array.length > 1){
   num.splice(0,1);
   return includesNumber(num, desiredIndex);
 }
 else return false
}
 