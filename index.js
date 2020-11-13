// Code your solution here!

function printString(str){
    console.log(str[0])
    if(str.length > 1){
        printString(str.substring(1, str.length))
    } 
};

function reverseString(str){
    let rev = []
    // for(let i = str.length - 1; i >= 0; i--){
    //     rev.push(str[i])
    // }
    // return rev.join('')

    if(str.length > 0){
        let subStr = str.substring(0, str.length -1)
        rev.push(str[str.length - 1] + reverseString(subStr)) 
    }
    return rev.join('')
}

function isPalindrome(str){
    let match;
    if(str.length > 1){
        if(str[0] === str[str.length - 1]){
            match = true
            isPalindrome(str.substring(1, str.length - 1))
        } 
    }
    return !!match
}

// expect(addUpTo([1, 4, 5, 3], 2)).toEqual(10);
// expect(addUpTo([4, 3, 1, 5], 1)).toEqual(7);
// function addUpTo(arr, i){
//     console.log(arr)
//     let sum = 0
//     if (i >= 0 && arr.length > 0){
//         sum += (arr[0] + addUpTo(arr.splice(1, i), i-1))
//     }
//     return sum
// }
function addUpTo(arr, i){
    let sum = 0
    if (i){
        sum += (arr[i] + addUpTo(arr, --i))
    } else {
        sum += arr[i]
    }
    return sum
    // return i ? arr[i] + addUpTo(arr, --i) : arr[i];
}

function maxOf(arr) {
    if (arr.length === 1) {
        return arr[0]
    } else {
        if ( arr[0] > arr[1]) {
            arr.splice(1, 1)
            return maxOf(arr)
        } else {
            arr.splice(0, 1)
            return maxOf(arr)
        }
    }
    // FlatIron Solution
    // if (myArray.length === 1) {
    //     return myArray[0];
    //   } else {
    //     return Math.max(myArray.pop(), maxOf(myArray));
    //   }
}

function includesNumber(arr, i){
    let match;
    // for (let j = 0; j < arr.length; j++){
    //     if (arr[j] === i) {
    //         match = true
    //     }
    // }
    // return !!match
    if (arr[0] === i) {
       return true
    } else {
        if (arr.length > 1) {
            return includesNumber(arr.splice(1, arr.length), i)
        } else {
            return false
        }   
    }
}
