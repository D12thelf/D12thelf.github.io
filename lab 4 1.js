/* Defining Table
INPUT:  Obtain first name from input label firstName
PROCESSING:  Create new scripture by joining firstName
OUTPUT:  Create personalized scripture
*/

function addNumbers (){
	//INPUT
	let x=document.getElementById ('firstName').value;
	
	//PROCESSING
	let scripture="Genisis 22:11 And the Angel of the Lord called unto him out of heaven and said, " + x +", " + x + ", and he said, here I am.";
	
	//OUTPUT
	document.getElementById("output").innerHTML = scripture;
	
}