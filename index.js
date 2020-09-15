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
    if (string.length > 1) {
      return reverseString(string.substring(1)) + string[0];
    } else {
      return string;
    };
  };

  function isPalindrome(string) {
      //what is a palindrome? A word that can be read the same way forwards + backwards
      //If a word only has 2 letters or less, it's a palindrom.
      let length = string.length;
      if (length < 2) {
          return true;
      } else if (string[0] === string[length - 1]) {
        return isPalindrome(string.substring(1, length - 1));
      } else {
          return false;
      }
  }

  function addUpTo(array, index) {
    /*
    function addUpTo5([1, 2, 3, 4, 5], 5) {
       return array[0] + array[1] + array[2] + array[3] + array[4]
       take last number from index, and add it to the next element in the array, call on the next 
    }
    */

    if (index > 0) {
        return array[index] + addUpTo(array, --index)
    } else {
        return array[index]
    }
  }

  function maxOf(array) {
      /* 
        If the array only has 1 item in it, return that item.
        Otherwise, find the max number in the array
      */

    if (array.length === 1) {
        return array[0]
    } else {
        return Math.max(array.pop(), maxOf(array))
    }
  }

function includesNumber(array, n) {
    /* 
        3 conditionals: 
            1. After using recursion, if the array is empty, return false.
            2. If the index is n, return true.
            3. Use recursion to call the next item in the array using slice
    */

    if (!array.length) {
        return false;
    } else if (array[0] === n) {
        return true;
    } else {
        return includesNumber(array.slice(1), n)
    }
}

