//INPUT Return the sum of the first and last values in a array.
//PROCESSING Find the first value of an array and the last value of an array and add the total of the two numbers togehter.

let list = [36, 4, 9, 16, 25, 55, 29];

//OUTPUT show sum of integers first and last in the array
document.getElementById("output").innerHTML = addEnds(list);

function addEnds(list) {
	return list[0] + list[list.length - 1];
}
