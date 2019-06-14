

/*Defining Table 
INPUT: The user enters a number
PROCESSING: 
compute sum of all odd integers between 1 and the user's integer, inclusive; use loop to get it to run through and add all odd integers
OUTPUT:Display the toal of all odd integers between 1 and the user's integer, inclusive.
*/

function oddTotal() {
	//Input
	let n = parseInt(document.getElementById("number").value); 
	
	//Processing
	let sum = 0;
	for (let i=1; i<=n; i+=2) {
		sum += i
	}
	
	//Output
	document.getElementById("output").innerHTML = "The sum of all odd integers from 1 to your number, inclusive is: ";
	document.getElementById("totalOdd").innerHTML = sum;
}