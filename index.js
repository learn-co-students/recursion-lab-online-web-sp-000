// function printString(str) {
//     console.log(str[0])

//     if(str.length > 1) {
//         let mySubstring = str.substring(1, str.length)
//         printString(mySubstring)
//     } else {
//         return true
//     }
// }

// Alternative code:
function printString(str) {
    console.log(str[0])
    if (str.length > 1) printString(str.substring(1))
}

function reverseString(str) {
    if (str.length > 1) {
        return reverseString(str.substring(1)) + str[0]
        // return reverseString(str.substring(1)) + str.charAt(0)
    } else {
        return str[0]
    }
}

function isPalindrome(str) {
    if (str.length <= 1) return true
    if (str[0] !== str.slice(-1)) return false
    return isPalindrome(str.slice(1, -1))
}


function addUpTo(arr, idx){
    if (arr.length > 1) {
        return addUpTo(arr.slice(1, idx + 1), idx - 1) + arr[0]
    } else {
        return arr[0]
    }
}

function maxOf(arr) {
    if (arr.length > 1) {
        arr[0] > arr[1] ?
            arr.splice(1, 1) :
            arr.splice(0, 1)
        return maxOf(arr)
    } else {
        return arr[0]
    }
}

function includesNumber(arr, val) {
    if (arr[0] === val) return true
    if (arr.length === 0) return false
    return includesNumber(arr.slice(1), val)
}