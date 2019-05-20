/* Defining Table
INPUT:  Obtain first name from input label firstName
PROCESSING:  Create new scripture by joining firstName
OUTPUT:  Create personalized scripture
*/

function scripture() {
	//INPUT
	let firstname = document.getElementById('firstName').value;
	
	//PROCESSING
	let scripture = "Genisis 22:11 And the Angel of the Lord called unto him out of heaven and said, " + firstname +", " + firstname + ", and he said, here I am.";
	
	//OUTPUT
	document.getElementById("output").innerHTML = scripture;
	
}