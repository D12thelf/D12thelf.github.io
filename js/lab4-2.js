
/* Defining Table
INPUT:  Obtain three inputs with City, State and Zip Code
PROCESSING:  Create address by joining City, State and Zip Code to equal the address.
OUTPUT:  Create and display address
*/

function addressCreator() {
	//INPUT
	let city = document.getElementById('city').value;
	
	let state = document.getElementById('state').value;
	
	let zipCode = document.getElementById('zipCode').value;


//PROCESSING
	
	let address = city + ", " + state + "  " + zipCode;
	
//OUTPUT
document.getElementById('output').innerHTML = address;
}