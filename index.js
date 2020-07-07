function printString(myString)
{
  console.log(myString[0]);
  if(myString.length > 1)
  {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  }
  else
  {
    return true;
  }
}

function reverseString(myString) 
{
  if (myString === "")
  {
    return "";
  }
  else
  {
    return reverseString(myString.substring(1)) + myString.substring(0, 1);
  }
}


function isPalindrome(myString)
{
  if(myString.length > 1)
  {
    if (myString[0] == myString[myString.length - 1])
    {
      let mySubString = myString.substring(1, myString.length - 1); 
      return isPalindrome(mySubString);
    }
    else
    {
      return false;
    }
  }
  return true;
}

function addUpTo(array, index)
{
  if(index > 0)
  {
    {
      return addUpTo(array, index - 1) + array[index]
    }
  }
  else
  {
    return array[index]
  }
}

function maxOf(array)
{
  if(array.length > 1)
  {
    if(array[0] > array[1])
    {
      let newArray = array[0] + array.slice(2)
      return maxOf(newArray)
    }
    else
    {
      let newArray = array.slice(1)
      return maxOf(newArray)
    }
  }
  else
  {
    return array[0];
  }
}

function includesNumber(array, number)
{
  if(array[0] == number)
  {
    return true;
  }
  else if(array.length > 1)
  {
    let newArray = array.slice(1);
    return includesNumber(newArray, number);
  }
  else
  {
    return false;
  }
}
