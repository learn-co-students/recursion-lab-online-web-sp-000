// Code your solution here!

function printString(str) {
  //print str[0] then pop off first, reassign new sring to substring and call printString again until stri.length === 0
  let substr = str;

  console.log(substr[0]);

  substr = substr.substring(1, substr.length);

  if (substr.length > 0) {
    printString(substr);
  }
  // else {
  //   return true;
  // }
}

// function reverseString(str, reversedArray = []) {
//   if (reversedArray) {
//     reversedArray.push(str[str.length - 1]);
//   }
//   // else {
//   //   reversedArray = [str[str.length - 1]];
//   // }

//   if (str.length > 1) {
//     let newString = str.substring(0, str.length - 1);
//     reverseString(newString, reversedArray);
//   }

//   return reversedArray.join("");
// }

function reverseString(str, reversedString = "") {
  if (str.length === 0) return reversedString;

  const newString = str.substring(0, str.length - 1);
  const newReversedString = reversedString.concat(str[str.length - 1]);

  return reverseString(newString, newReversedString);
}

function isPalindrome(str, i = 0, j = str.length - 1) {
  let answer = true;

  if (i < j) {
    if (str[i] === str[j]) {
      answer = isPalindrome(str, i + 1, j - 1);
    } else {
      answer = false;
    }
  }

  return answer;
}
//looking for one case that makes it false, default is true

function addUpTo(array, idx, i = 0, sum = 0) {
  sum = sum + array[i];

  if (i < idx) {
    sum = addUpTo(array, idx, i + 1, sum);
  }

  return sum;

  // const newSum = sum + array[i];
  // if (i >= idx) return newSum;
  // return addUpTo(array, idx, i + 1, newSum);
}

// if (i = 0) {
//   highestSeen = array[i]
// } //better to do this commented out bit or pass in to definition?
function maxOf(array, i = 0, highestSeen = array[i]) {
  if (array[i] > highestSeen) {
    highestSeen = array[i];
  }

  if (i < array.length - 1) {
    highestSeen = maxOf(array, i + 1, highestSeen);
  }
  // else {
  //   return highestSeen
  // }

  return highestSeen;
}
//           i
// [1, 4, 5, 3]
//           3
// 4: array[i] = 3; i = 3; highestSeen = 5

// call 4 = return 5
// call 3 = return of call 4, so return 5
// call 2 = return of call 3, so return 5,
// call 1 = return of call 2, so return 5

function includesNumber(array, target, i = 0) {
  let answer = false;
  if (i < array.length) {
    if (array[i] !== target) {
      answer = includesNumber(array, target, i + 1);
    } else {
      answer = true;
      return answer;
    }
  } else {
    return answer;
  }
  return answer;
}
//looking for the one case that makes it true, default is false

// [1, 4, 2, 3] target = 5
//             i
// answer = false;
// value = 3
// i = 3;
// array.length = 4;
// round 4

// round 5 =  false
// answer round 4 = return of round 5
// answer round 3 = return of round 4
// answer round 2 = return of round 3
// answer round 1 = return of round 2
// ------
// [1, 4, 5, 3]   target = 5;
//        i
// answer = true;
// value = 5
// i = 2;
// array.length = 4;
// round 3

// round 3 = true
// round 2 = return of round 3 = true
// round 1 = return of round 2 = true
