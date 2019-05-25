
/* Defining Table
To compute and output an employees after tax pay.  The program will need to read the number of hours worked as well as wage and compute that employes tax rate.  The tax rate is 15 percent, of Employees Gross Pay.

INPUT: Enter the number of hours worked 
       Enter the hourly rate of pay
PROCESSING: Compute the number of hours worked times the hourly rate for the gross times 15 percent.  (Hours*Wage) *.15 = After Tax Pay
OUTPUT: Display Employess Take Home Pay
*/

function calculateWage() {
	//INPUT
	
	let hours = parseInt(document.getElementById('hours').value);
	let wage = parseInt(document.getElementById('wage').value);
	
//PROCESSING
	
	let gross = hours * wage;
	let tax = gross * .15;
	let net = gross - tax;
	//OUTPUT
	
	document.getElementById('output').innerHTML = net;
}