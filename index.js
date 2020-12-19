// Code your solution here!

function printString(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i])
  }
}

// recursive version of above
function printString(str) {
  console.log(str[0])

  if (str.length > 1) {
    let newStr = str.substring(1, str.length)
    printString(newStr)
  } else {
    return true
  }
}

function reverseString(str) {
  if (str.length < 2) {
    return str
  } else {
    return reverseString(str.substring(1)) + str[0]
  }
}

function isPalindrome(str) {
  if (str.length <= 1) {
    console.log("b")
    return true
  }
  if (str[0] !== str[str.length - 1]) {
    console.log("c")
    return false 
  }
  return isPalindrome(str.slice(1, -1))
}

function addUpTo(array, index) {
  return index ? array[index] + addUpTo(array, --index) : array[index]
}

function maxOf(array) {
  // let sortedArray = array.sort()
  // return sortedArray[sortedArray.length - 1]
  if (array.length === 1) {
    return array[0]
  } else {
    return Math.max(array.pop(), maxOf(array))
  }
}

// this works just fine to my knowledge 
function includesNumber(array, element) {
  // return array.includes(element) ? true : false
  if (!array.length) {
    return false
  } 
  if (array[0] === element) {
    return true 
  }
  return includesNumber(array.slice(1), element)
}

// function includesNumber(myArray, myNumber) {
//   if (!myArray.length) {
//     return false;
//   } else if (myArray[0] === myNumber) {
//     return true;
//   } else {
//     return includesNumber(myArray.slice(1), myNumber);
//   }
// }