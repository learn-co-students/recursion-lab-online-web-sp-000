function printString(myString) {
    console.log(myString[0]);
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
    }
}

function reverseString(myString) {
    if (myString.length > 1) {
      return reverseString(myString.substring(1)) + myString[0];
    } else {
      return myString[0];
    }
}

function isPalindrome(str){
    if(str[0] !== str[str.length -1]){
        return false
    } else if(str.length === 1 || str.length === 0)  {
        return true
    } else {
        return isPalindrome(str.substring(1, str.length -1))
    }
}

function addUpTo(arr, idx){
    let n = 0; 
    if (idx !== 0){
        return addUpTo(arr.slice(0, idx), idx -1) + (n + arr[idx])
    } else {
        return n + arr[0]
    }
}

function maxOf(arr) {
    if (arr.length > 1) {
        if (arr[0] >= arr[1]) {
            let newArr = arr.slice(0, 1) + (arr.slice(2))
            return maxOf(newArr);
        } else {
            return maxOf(arr.slice(1));
        }
    } else {
        return arr[0];
    }
}

function includesNumber(arr, num){
    if (arr.length > 0){
        if (arr[0] === num){
            return true
        } else {
            return includesNumber(arr.slice(1), num)
        }
    } else {
        return arr[0] === num ? true : false;
    }
}