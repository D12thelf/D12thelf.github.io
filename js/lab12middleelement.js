//Defining Table and a function that returns the middle element of an array. If the array has a even number of elements, then this function must return the average of the two middle elements. This program also calls the addEnd function that adds the end elements of the array. Both functions are called by the click button.//

// This function calls the addEnds function and the getMiddle function.
function combineFunctions() {
    let list = [0,1,2,3,4,4,5,5,6,7,7,8,8,11,16,23];
    let result = 0;
    let result2 = 0;
    let result3 = 0;
    result = addEnds(list);
    result2 = getMiddle(list);
    result3 = "The sum of the first value and the last value of the array is   " + result + "." + "<br>" + "The middle value of the array is " + result2 + ".";
    document.getElementById("outputDiv1").innerHTML = result3;
  }
  // This function adds the ends of the array index values.
  
  function addEnds(list) {
    return list[0] + list[list.length - 1];
      
  }
  
  //getMiddle function//
  function getMiddle(list) {
    let middle = Math.floor(list.length / 2);
    let evenOrOdd = list % 2;
    // If the array has a odd number of values.
    if (list != 0) {
      return list[middle];
    } else {
      // If the array has a even number of values. 
      return (list[middle] + list[middle+1])
          / 2;
           
    }
  }