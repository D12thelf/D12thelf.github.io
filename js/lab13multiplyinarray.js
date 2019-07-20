//DEFINING TABLE Create a function that multiplies each element in an array by some value. The function must have the header multiply.

//PROCESSING Function called for in the assignment
function multiply(list, x) {
	let list1 = new Array(list.length);

	for (let i = 0; i < list.length; i++) {
		list1[i] = list[i] * x;
	}
	return list1;
}
//OUTPUT function to test function multiply
function onClick() {
	let list = [17, 8, 9, 5, 20];
	let products = multiply(list, 3);
	document.getElementById("output").innerHTML = products;
}