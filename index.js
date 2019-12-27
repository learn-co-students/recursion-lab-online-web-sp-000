// Code your solution here!

function printString(s) {
  console.log(s[0]);

  if (s.length > 1) {
    let sub = s.substring(1, s.length);
    printString(sub);
  } else {
    return true;
  }
}

function reverseString(s) {
  let l = s.length;
  if (l > 1) {
    return s[l - 1] + reverseString(s.substring(0, l - 1));
  } else {
    return s;
  }
}

function isPalindrome(s) {
  let l = s.length;
  if (l > 1) {
    if (s[0] === s[l - 1]) {
      return true && isPalindrome(s.substring(1, l - 1));
    } else {
      return false;
    }
  } else {
    return true;
  }
}

function addUpTo(a, i) {
  if (i > 0) {
    return a[i] + addUpTo(a, i - 1);
  } else {
    return a[0];
  }
}

function maxOf(a) {
  let l = a.length;
  if (a.length > 1) {
    if (a[0] > a[l - 1]) {
      a.pop();
      return maxOf(a);
    } else {
      a.shift();
      return maxOf(a);
    }
  } else {
    return a[0];
  }
}

function includesNumber(a, n) {
  if (a.length > 1) {
    if (a[0] === n) {
      return true;
    } else {
      a.shift();
      return includesNumber(a, n)
    }
  } else {
    return a[0] === n ? true : false;
  }
}
