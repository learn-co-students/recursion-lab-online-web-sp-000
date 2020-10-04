// Code your solution here!

function printString(string){
  console.log(string[0])
  if (string.length > 1){
    printString(string.substring(1))
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
    return true
  } else if (s[0] !== s[s.length-1]){
    return false
  } else {
    let subString = s.substring(1, s.length-1)
    return isPalindrome(subString)
  }
}

function addUpTo(array, index){
  if (index === 0){
    return array[0]
  } else {
    
    return addUpTo(array, index-1) + array[index]
  }
}

function maxOf(array){
  if (array.length === 1){
    return array[0]
  } else if (array[0] <= array[1]){
    array.shift()
    return maxOf(array)
  } else {
    array.splice(1,1)
    return maxOf(array)
  }
}

function includesNumber(array, int){
  if (array.length === 1){
    return array[0] === int
  } 

  if (array[0] === int){
    return true
  } else {
    array.shift()
    return includesNumber(array, int)
  }
    
}
