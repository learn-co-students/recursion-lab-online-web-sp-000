// Code your solution here!
function printString(myString)
{
  console.log(myString[0]);

  if (myString.length > 1)
  {
    printString(myString.substr(1));
  }
  else
  {
    return true;
  }
}

function reverseString(myString)
{
  //

  if (myString.length === 1) // if inputted string contains once substring or less...
  {
    return myString; // ... return that string because reversing one, none, or negative character(s) is meaningless
  }
   else
  {
    // return reverseString(myString.slice(1)) + myString[0];
    // return reverseString(myString.substring(1)) + myString[0];
    return reverseString(myString.substr( 1, myString.length)) + myString[0];
    // return myString.split("").reverse().join(""); // This is the non-recursive method.
    /*
      The 4 statements above (i.e the 3 commented out ones and the 1 that's not commented out), are four solutions to reverse a string. The first three are difficult to comprehend. Read comments below for more info.

      "From what I can see, there are three primary methods for substring extraction:
      String.slice( begin [, end ] )
      String.substring( from [, to ] )
      String.substr( start [, length ] )"
      retrieved from: https://www.bennadel.com/blog/2159-using-slice-substring-and-substr-in-javascript.htm

      "JavaScript provides two similar looking String manipulation function, substr and substring, though both are used to get substring from an String, there is a subtle difference between substring and substr method in JavaScript. If you look at there signature, both substr(to, length) and substring(to, from) both takes two parameters, but substr takes length of substring to be returned, while substring takes end index (excluding) for substring.This main difference will be more clear when we will see couple of examples of using substr and substring in JavaScript code. By the way this is also a good JavaScript question and frequently asked to web developers during HTML, CSS and JavaScript interviews, along with how to prevent multiple submission of form data. Because of extensive uses of String, this knowledge is not only important from interview point of view but also from development point of view. It also helps to reduce subtle bugs in JavaScript code, which is introduce because of incorrect use of substr or substring method."
      retrieved from: https://javarevisited.blogspot.com/2013/08/difference-between-substr-vs-substring-in-JavaScript-tutorial-example.html
    */
  }
}

function isPalindrome(myString)
{
  // let substringAmount = myString.length; // save the substring amount to manipulate it later on

  if (myString.length === 1) // if the substring amount is only 1 then...
  {
    return true; // then it's a palindrome because any string with one substring reversed or not, are the same string, otherwise...
  }
  else if (myString[myString.length- 1] === myString[0]) //if the substring amount is more than 2 and the first and last substrings are the same using strict comparision...
  {
    return isPalindrome(myString.substring(1, myString.length - 1)); // ...then let's rescursively compare the next set of substrings...
  }
  else // ...otherwise...
  {
    return false; // return false since myString is not a palindrome
  }
}

function addUpTo(myArray, index)
{
  return index? myArray[index] + addUpTo(myArray, --index) : myArray[index];
}

function maxOf(myArray)
{
  if (myArray.length === 1)
  {
    return myArray[0];
  }
  else
  {
    return Math.max(myArray.pop(), maxOf(myArray));
  }
}

function includesNumber(myArray, myNumber)
{
  if (!myArray.length)
  {
    return false;
  }
  else if (myArray[0] === myNumber)
  {
    return true;
  }
  else
  {
    return includesNumber(myArray.slice(1), myNumber);
  }
}
