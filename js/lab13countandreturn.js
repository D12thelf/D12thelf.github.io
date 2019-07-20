// Defining Table create a program that retuns the number of even integers in an array using the function addEvens

//Processing
function addEvens(list) {
	numOfEvens = 0;
	for (let x = 0; x < list.length; x++) {
		if (list[x] % 2 == 0) {
			numOfEvens++;
		}
	}
	return numOfEvens;
}
//Output to test function

function onClick() {
	let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	document.getElementById("output").innerHTML = addEvens(array1);
}