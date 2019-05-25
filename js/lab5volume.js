
/* Defining Table
INPUT:  Compute the volume of a cylinder in liters. Ask for the approriate inputs.Output the total volume to the screen.  Your program should handle real numbers (numbers with decimals)
PROCESSING:  Use the formula to calculate volume  V=πr2h
OUTPUT:  Display units */

function  calculateVolume(){

	//INPUT
	let r =parseFloat(document.getElementById
					('r').value);
let h =parseFloat(document.getElementById ('h').value);
	
	//PROCESSING
let volume = Math.PI * (Math.pow (r,2)*h)
	
	//OUTPUT
	document.getElementById("output").innerHTML = "Your Volume Is: " + volume + " liters";
	
}
