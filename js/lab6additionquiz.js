/* Defing Table
Write an Addition Quiz program to quiz a child on simple addition. The Quiz should randomly create two positive integers of max values of 100 and display those integers along with the addition symbol (+) and then allow the child to enter the answer. The program should compute the correct answer and compare it to the child's answer and output "Correct! Good Job" or "Sorry. That is incorrect"

INPUT: User answers a random addition problem.

PROCESSING: Generate two random integers between 1-100. The child will put in an answer. Write a else statement to compare the child's answer and give a message of Correct or Sorry. 

OUTPUT: The output should depend on answer given it should read "Correct!Good Job" or "Sorry. That is Incorrect"
*/

const MAX = 100;
let firstNumber = Math.floor(Math.random() * Math.floor(MAX));

let secondNumber = Math.floor(Math.random() * Math.floor(MAX));

document.getElementById('firstNumber').innerHTML = firstNumber;
document.getElementById('secondNumber').innerHTML = secondNumber;


function checkAnswer() {
	//INPUT
	let firstNumber = parseInt(document.getElementById('firstNumber').innerHTML);
	let secondNumber = parseInt(document.getElementById('secondNumber').innerHTML);
	let correctAnswer = firstNumber + secondNumber;
	let givenAnswer = parseInt(document.getElementById('givenAnswer').value);
	
	let message = "";
	if(givenAnswer == correctAnswer) {
		message = "Correct! Good job."
		 }	
	else {
		message = "Sorry. That is incorrect. The answer is " + correctAnswer + ".";
	}
	//OUTPUT
	document.getElementById('result').innerHTML = message;
}