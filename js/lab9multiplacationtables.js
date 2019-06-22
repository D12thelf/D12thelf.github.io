//DEFINING TABLE Write a program that outputs the times tables from 1 to 12 for any positive integer that the User inputs.

//INPUT: The User inputs the integer.
//PROCESSING: Must process the positive integer and then computer the corresponding times table
//DISPLAY: Display the times table

function showTable() {
    //INPUT
    let num = parseInt(document.getElementById("num").value);
    let timesTable = "";
  
    //PROCESSING
    for (let i = 1; i <= 12; i++) {
      timesTable += num + " x " + i + " = " + num * i + "<br>";
    }
  
    //OUTPUT
    document.getElementById("output").innerHTML = timesTable;
  }
  