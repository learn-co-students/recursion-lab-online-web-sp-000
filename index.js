// Code your solution here!


function printString(inputString)
{
  let substring;
  
  console.log(inputString[0]);
  if (inputString.length > 1)
  {
    substring = inputString.substring(1, inputString.length);
    printString(substring);
  }
  else {
    return true;
  }
  
}

// Code your solution here!


function reverseString(inputString)
{
  let substring;
  
  if (inputString === "")
  {
    return "";
  }  
  else
  {
    inputString = reverseString(inputString.substring(1)) + inputString.charAt(0);
  }
  return inputString;
}

function isPalindrome(inputString)
{
  
  if (inputString === "" || inputString.length ===1)
  {
    return true;
  }  
  else
  {
    if(inputString.charAt(0) === inputString.charAt(inputString.length - 1))
    {
      //console.log(`string left = ${inputString} ${inputString.charAt(0)} = ${inputString.charAt(inputString.length - 1)}, next :${inputString.substring(1,inputString.length - 2)}`)
      return isPalindrome(inputString.substring(1,inputString.length - 1));
    }
    else 
    {
      //console.log(false)
      return false;    
    }
  }
}

function addUpTo(inputArray, inputIndex)
{
  
  if (inputIndex === 0)
  {
    return inputArray[inputIndex];
  }
  else
  {
    return (inputArray[inputIndex] + addUpTo(inputArray, inputIndex - 1));
  }
  
}

function maxOf(inputArray)
{
  
  if(inputArray.length === 1)
  {    
    
    return inputArray[0];
    
  }
  else
  {
    let max = maxOf(inputArray.slice(1));
    if (inputArray[0] < max)
    {
      return max;
    }
    else
    {
      return inputArray[0];
    }
  }

}

function includesNumber(inputArray, inputElement)
{
  
  if(inputArray[0] === inputElement)
  {
    //console.log(`${inputElement} was found`)
    return true
  }
  else if(inputArray.length != 1)
  {
    //console.log(`${inputArray} does not have ${inputElement} so far`)
    return includesNumber(inputArray.slice(1),inputElement)
  }
  else
  {
    //console.log(`${inputElement} not found :(((`)
    return false
    
  }

}
