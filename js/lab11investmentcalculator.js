// Create a program that uses two functions to tell the User what their investments will calculate to in the future.

//The First Function will take no parameters. It will be called from the click attribute. It will obtain its input from the User. The Computer will then call the CumputeFutureValue function and the results will be displayed to the User.

//First Function

function doFV() {
    let a = parseInt(document.getElementById("a").value);
  
    let r = parseFloat(document.getElementById("r").value);
  
    let y = parseFloat(document.getElementById("y").value);
  
    let n = parseFloat(document.getElementById("n").value);
  
    let output = computeFutureValue(a, r, y, n);
    document.getElementById("output").innerHTML = output.toFixed(2);
  }
  //Second Function. This function will compute and return the future value of the investment. f is the future value.
  function computeFutureValue(a, r, y, n) {
    let f = r / n;
    let period = n * y;
    let output = a * Math.pow(1 + f, period);
    return output;
  }
  